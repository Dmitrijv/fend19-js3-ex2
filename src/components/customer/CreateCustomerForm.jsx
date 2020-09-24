import React, { useState, useContext } from "react";

import styled from "styled-components";

import styles from "../../styles/js/styles";
import UserKit from "../../data/UserKit";
import { BusinessContext } from "../../contexts/BusinessContext";

import InputField from "./../InputField";

const NewCustomerSheet = styled(styles.InfoSheet)`
  border-left: 6px solid #83b655;
  margin-right: 10px;
  form {
    display: flex;
    flex-direction: column;
  }

  form input,
  form button {
    min-width: 320px;
    margin-right: 0px;
  }
`;

export default function CreateCustomerForm() {
  const CUSTOMER_LIMIT = 10;
  const userKit = new UserKit();

  const { customerList, fetchCustomerList } = useContext(BusinessContext);

  const [name, setName] = useState(""); // string min:1 max: 50 REQUIRED
  const [organisationNr, setOrganisationNr] = useState(""); // string max:30
  const [vatNr, setVatNr] = useState(""); // string SE1234567890 max: 15
  const [reference, setReference] = useState(""); // string max:50
  const [paymentTerm, setPaymentTerm] = useState(""); // integer min:0 max:2147483647 REQUIRED
  const [website, setWebsite] = useState(""); // string max: 50
  const [email, setEmail] = useState(""); //string max:254
  const [phoneNumber, setPhoneNumber] = useState(""); // string max:20

  const inputFieldsArray = [
    { label: "Name", value: name, callback: setName, required: true },
    { label: "Organisation nr", value: organisationNr, callback: setOrganisationNr },
    { label: "Vat nr", value: vatNr, callback: setVatNr, placeholder: "SE##########" },
    { label: "Reference", value: reference, callback: setReference },
    {
      label: "Payment term",
      value: paymentTerm,
      callback: setPaymentTerm,
      required: true,
      placeholder: "days"
    },
    { label: "Website", value: website, callback: setWebsite },
    { label: "Email", value: email, callback: setEmail, type: "email" },
    { label: "Phone number", value: phoneNumber, callback: setPhoneNumber }
  ];

  function emptyInputFieldValues() {
    inputFieldsArray.forEach(field => field.callback(""));
  }

  function handleCreateCustomer(event) {
    const form = event.currentTarget;
    console.log(form);
    const newCustomer = {
      name: name,
      organisationNr: organisationNr,
      vatNr: vatNr,
      reference: reference,
      paymentTerm: paymentTerm,
      website: website,
      email: email,
      phoneNumber: phoneNumber
    };
    userKit.createCustomer(newCustomer).then(() => {
      fetchCustomerList();
      emptyInputFieldValues();
      form.reset();
    });
    event.preventDefault();
  }

  let submitDisabled = customerList && customerList.length >= CUSTOMER_LIMIT ? true : false;

  return (
    <NewCustomerSheet>
      <styles.FlexContainer>
        <h2>Create New Customer</h2>
        <form onSubmit={handleCreateCustomer}>
          {inputFieldsArray.map((fieldTemplate, index) => (
            <InputField fieldTemplate={fieldTemplate} key={`create-customer-field-${index}`} />
          ))}
          {submitDisabled && (
            <button type="submit" disabled>
              Customer Limit Reached
            </button>
          )}
          {!submitDisabled && <button type="submit">Create</button>}
        </form>
      </styles.FlexContainer>
    </NewCustomerSheet>
  );
}
