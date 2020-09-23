import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";
import DropdownOption from "./DropdownOption";

import styles from "./../styles/js/styles";

const RegisterForm = () => {
  const userKit = new UserKit();
  const history = useHistory();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [organisationKind, setOrganisationKind] = useState("");

  const inputItemsArray = [
    ["First Name", firstName, setFirstName],
    ["Last Name", lastName, setLastName],
    ["Email", email, setEmail],
    ["Password", password, setPassword],
    ["Organisation Name", organisationName, setOrganisationName]
  ];

  const organisationKinds = [
    [0, "N/A"],
    [1, "Auto Enterpreneur"],
    [2, "SAS SARL"]
  ];

  function renderInput(index, placeholder, value, setValue) {
    return (
      <styles.InputContainer key={index}>
        <label htmlFor={placeholder}>{placeholder}:</label>
        <input placeholder={placeholder} id={placeholder} value={value} onChange={e => setValue(e.target.value)} />
      </styles.InputContainer>
    );
  }

  function renderDropdownInput(index, placeholder, optionList, setValue) {
    return (
      <styles.InputContainer key={index}>
        <label htmlFor={placeholder}>{placeholder}:</label>
        <select id={placeholder} name={placeholder} defaultValue={0} onChange={e => setValue(e.target.value)} required>
          {optionList.map(([id, label]) => {
            return <DropdownOption key={`dropdown-key-${id}`} orgId={id} orgLabel={label} />;
          })}
        </select>
      </styles.InputContainer>
    );
  }

  function handleRegister(event) {
    userKit.register(firstName, lastName, email, password, organisationName, organisationKind);
    history.push("/verify");
    event.preventDefault();
  }

  return (
    <styles.FlexContainer className="white-card">
      <styles.FormContainer>
        <h2>Register New User</h2>
        <form onSubmit={handleRegister}>
          {inputItemsArray.map(([placeholder, value, setValue], index) =>
            renderInput(index, placeholder, value, setValue)
          )}
          {renderDropdownInput(inputItemsArray.length + 1, "Organisation Kind", organisationKinds, setOrganisationKind)}
          <button type="submit">Register</button>
        </form>
      </styles.FormContainer>
    </styles.FlexContainer>
  );
};

export default RegisterForm;
