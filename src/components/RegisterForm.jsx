import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import styles from "./../styles/js/styles";
import UserKit from "../data/UserKit";
import { BusinessContext } from "./../contexts/BusinessContext";

import InputField from "./InputField";

const RegisterForm = () => {
  const userKit = new UserKit();
  const history = useHistory();

  const { setEmailToVerify } = useContext(BusinessContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");

  // for some reason defaultValue attribute in <select> tag doesn't work
  const [organisationKind, setOrganisationKind] = useState("0");

  const organisationKinds = [
    { id: "0", label: "0" },
    { id: "1", label: "1" },
    { id: "2", label: "2" }
  ];

  const newUserInputFields = [
    {
      label: "First Name",
      showLabel: true,
      value: firstName,
      callback: setFirstName,
      required: true,
      minLength: 1,
      maxLength: 30
    },
    {
      label: "Last Name",
      showLabel: true,
      value: lastName,
      callback: setLastName,
      required: true,
      minLength: 1,
      maxLength: 30
    },
    {
      label: "Email",
      showLabel: true,
      value: email,
      callback: setEmail,
      required: true,
      type: "email",
      minLength: 1,
      maxLength: 254
    },
    {
      label: "Password",
      showLabel: true,
      type: "password",
      value: password,
      callback: setPassword,
      required: true,
      minLength: 1
    },
    {
      label: "Organisation Name",
      showLabel: true,
      required: true,
      value: organisationName,
      callback: setOrganisationName
    },
    {
      label: "Organisation Kind",
      showLabel: true,
      required: true,
      type: "select",
      defaultValue: "0",
      optionList: organisationKinds,
      value: organisationKind,
      callback: setOrganisationKind
    }
  ];

  function handleRegister(event) {
    console.log(organisationKind);
    userKit.register(firstName, lastName, email, password, organisationName, organisationKind).then(response => {
      console.log(response);
      if (response.ok === true) {
        setEmailToVerify(email);
        history.push("/verify");
      } else {
        history.push("/register-fail");
      }
    });
    event.preventDefault();
  }

  return (
    <styles.SimpleFormSheet>
      <h2>Register New User</h2>
      <styles.ColumnForm onSubmit={handleRegister}>
        {newUserInputFields.map((template, index) => (
          <InputField template={template} key={`create-customer-field-${index}`} />
        ))}
        <button type="submit">Register</button>
      </styles.ColumnForm>
    </styles.SimpleFormSheet>
  );
};

export default RegisterForm;
