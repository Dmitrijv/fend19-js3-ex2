import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";

import styled from "styled-components";
import styles from "../styles/js/styles";

import UserKit from "../data/UserKit";
import { BusinessContext } from "../contexts/BusinessContext";
import UnauthorizedErrorPage from "./errors/UnauthorizedErrorPage";
import InputField from "../components/InputField";

export default function EditCustomerPage() {
  const userKit = new UserKit();
  const history = useHistory();

  const { customerId } = useParams();
  const { customerList, checkIfAuthorized } = useContext(BusinessContext);

  const [isUserAuthorized, setIsUserAuthorized] = useState(null);
  const [customer, setCustomer] = useState(null);

  const [name, setName] = useState(""); // string min:1 max: 50 REQUIRED
  const [organisationNr, setOrganisationNr] = useState(""); // string max:30
  const [vatNr, setVatNr] = useState(""); // string SE1234567890 max: 15
  const [reference, setReference] = useState(""); // string max:50
  const [paymentTerm, setPaymentTerm] = useState(""); // integer min:0 max:2147483647 REQUIRED
  const [website, setWebsite] = useState(""); // string max: 50
  const [email, setEmail] = useState(""); //string max:254
  const [phoneNumber, setPhoneNumber] = useState(""); // string max:20

  const customerInputFields = [
    { label: "Name", value: name, callback: setName, required: true, minLength: 1, maxLength: 50, showLabel: true },
    { label: "Organisation nr", value: organisationNr, callback: setOrganisationNr, maxLength: 30, showLabel: true },
    {
      label: "Vat nr",
      value: vatNr,
      callback: setVatNr,
      placeholder: "SE##########",
      maxLength: 12,
      pattern: "SE[0-9]{10}",
      showLabel: true
    },
    { label: "Reference", value: reference, callback: setReference, maxLength: 50, showLabel: true },
    {
      label: "Payment term",
      value: paymentTerm,
      callback: setPaymentTerm,
      required: true,
      placeholder: "days",
      pattern: "^[0-9]*$",
      maxLength: 10,
      showLabel: true
    },
    { label: "Website", value: website, callback: setWebsite, maxLength: 50, showLabel: true },
    { label: "Email", value: email, callback: setEmail, type: "email", maxLength: 254, showLabel: true },
    { label: "Phone number", value: phoneNumber, callback: setPhoneNumber, maxLength: 20, showLabel: true }
  ];

  function fillInInputFields(customer) {
    setName(customer.name);
    setOrganisationNr(customer.organisationNr);
    setVatNr(customer.vatNr);
    setReference(customer.reference);
    setPaymentTerm(customer.paymentTerm);
    setWebsite(customer.website);
    setEmail(customer.email);
    setPhoneNumber(customer.phoneNumber);
  }

  function handleUpdateCustomer(event) {
    const updatedCustomer = {
      name: name,
      organisationNr: organisationNr,
      vatNr: vatNr,
      reference: reference,
      paymentTerm: paymentTerm,
      website: website,
      email: email,
      phoneNumber: phoneNumber
    };
    userKit.updateCustomer(customerId, updatedCustomer).then(() => history.push("/home"));
    event.preventDefault();
  }

  useEffect(() => {
    checkIfAuthorized().then(isAuthorized => {
      if (isAuthorized === false) {
        setIsUserAuthorized(false);
        return;
      } else {
        setIsUserAuthorized(true);
        const localData = customerList ? customerList.find(cstm => cstm.id === Number(customerId)) : null;
        // use customer data from the local customer list if possible
        if (localData) {
          fillInInputFields(localData);
          setCustomer(localData);
        } else {
          // otherwise fetch data from the api
          userKit
            .getCustomerById(customerId)
            .then(res => res.json())
            .then(response => {
              setCustomer(response);
              fillInInputFields(response);
            });
        }
      }
    });
  }, []);

  // avoid "blinking" error page on screen  while we fetch authorization and customer data from the api
  if (isUserAuthorized === null || (isUserAuthorized === true && !customer)) return <GlobalLayout />;
  // show error page if we know for sure user is not authorized or customer doesn't exist
  else if (isUserAuthorized === false || !customer) return <UnauthorizedErrorPage />;

  return (
    <GlobalLayout>
      <div className="white-card">
        <styles.SimpleFormSheet>
          <h2>Updating Customer #{customer.id}</h2>
          <styles.ColumnForm onSubmit={handleUpdateCustomer}>
            {customerInputFields.map((template, index) => (
              <InputField template={template} showLabel={true} key={`create-customer-field-${index}`} />
            ))}
            <button type="submit">Update Customer</button>
          </styles.ColumnForm>
        </styles.SimpleFormSheet>
      </div>
    </GlobalLayout>
  );
}
