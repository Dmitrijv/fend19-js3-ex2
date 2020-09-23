import React, { useState, useContext } from "react";

import styled from "styled-components";

import styles from "../../styles/js/styles";
import UserKit from "../../data/UserKit";
import { BusinessContext } from "../../contexts/BusinessContext";

const NewCustomerSheet = styled(styles.InfoSheet)`
  min-width: fit-content;
  border-left: 6px solid #83b655;
`;

export default function CreateCustomerForm() {
  const userKit = new UserKit();

  const { setCustomerList } = useContext(BusinessContext);

  const [name, setName] = useState("");
  const [organisationNr, setOrganisationNr] = useState("");
  const [vatNr, setVatNr] = useState(""); //SE1234567890
  const [reference, setReference] = useState("");
  const [paymentTerm, setPaymentTerm] = useState(""); // integer
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleCreateCustomer(event) {
    const newCustomer = {
      name: "My first client"
    };
    userKit.createCustomer(newCustomer);
    event.preventDefault();
  }

  return (
    <NewCustomerSheet>
      <h2>Create New Customer</h2>
      <form onSubmit={handleCreateCustomer}>
        <button type="submit">Submit</button>
      </form>
    </NewCustomerSheet>
  );
}
