import React, { useState, useContext } from "react";

import styled from "styled-components";

import styles from "../../styles/js/styles";
import UserKit from "../../data/UserKit";
import { BusinessContext } from "../../contexts/BusinessContext";

import InputField from "./../InputField";

const NewCustomerSheet = styled(styles.InfoSheet)`
  border-left: 6px solid #83b655;
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
    { label: "Name", value: name, callback: setName, required: true, minLength: 1, maxLength: 50 },
    { label: "Organisation nr", value: organisationNr, callback: setOrganisationNr, maxLength: 30 },
    {
      label: "Vat nr",
      value: vatNr,
      callback: setVatNr,
      placeholder: "SE##########",
      maxLength: 12,
      pattern: "SE[0-9]{10}"
    },
    { label: "Reference", value: reference, callback: setReference, maxLength: 50 },
    {
      label: "Payment term",
      value: paymentTerm,
      callback: setPaymentTerm,
      required: true,
      placeholder: "days",
      pattern: "^[0-9]*$",
      maxLength: 10
    },
    { label: "Website", value: website, callback: setWebsite, maxLength: 50 },
    { label: "Email", value: email, callback: setEmail, type: "email", maxLength: 254 },
    { label: "Phone number", value: phoneNumber, callback: setPhoneNumber, maxLength: 20 }
  ];

  function emptyInputFieldValues() {
    inputFieldsArray.forEach(field => field.callback(""));
  }

  function handleCreateCustomer(event) {
    const form = event.currentTarget;
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
      <styles.FlexContainer id="create-customer-container">
        <h2>Create New Customer</h2>
        <styles.ColumnForm onSubmit={handleCreateCustomer}>
          {inputFieldsArray.map((template, index) => (
            <InputField template={template} key={`create-customer-field-${index}`} />
          ))}
          {submitDisabled && (
            <button type="submit" disabled>
              Customer Limit Reached
            </button>
          )}
          {!submitDisabled && <button type="submit">Create</button>}
        </styles.ColumnForm>
      </styles.FlexContainer>
    </NewCustomerSheet>
  );
}
