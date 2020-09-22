import React, { useState } from "react";
import UserKit from "../data/UserKit";
import styled from "styled-components";
import DropdownOption from "./DropdownOption";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  text-align: left;
  margin: auto;

  button {
    padding: 0.5rem 1rem;
    display: block;
    margin: 1.5rem auto;
    font-size: 1rem;
  }
`;

const InputContainer = styled.div`
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  font-size: 1.2rem;
  label {
    margin-right: 1rem;
  }
  input {
    padding: 3px;
    height: 1.3rem;
    font-size: 1rem;
    width: 200px;
  }
`;

const userKit = new UserKit();

const RegisterForm = () => {
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
      <InputContainer key={index}>
        <label htmlFor={placeholder}>{placeholder}:</label>
        <input placeholder={placeholder} id={placeholder} value={value} onChange={e => setValue(e.target.value)} />
      </InputContainer>
    );
  }

  function renderDropdownInput(index, placeholder, optionList, setValue) {
    return (
      <InputContainer key={index}>
        <label htmlFor={placeholder}>{placeholder}:</label>
        <select id={placeholder} name={placeholder} onChange={e => setValue(e.target.value)}>
          {optionList.map(([id, label], index) => {
            return <DropdownOption key={`dropdown-key-${id}`} orgId={id} orgLabel={label} />;
          })}
        </select>
      </InputContainer>
    );
  }

  function handleRegister() {
    userKit.register(firstName, lastName, email, password, organisationName, organisationKind);
  }

  return (
    <FlexContainer>
      <FormContainer>
        {inputItemsArray.map(([placeholder, value, setValue], index) =>
          renderInput(index, placeholder, value, setValue)
        )}
        {renderDropdownInput(inputItemsArray.length + 1, "Organisation Kind", organisationKinds, setOrganisationKind)}
        <button onClick={handleRegister}>Register</button>
      </FormContainer>
    </FlexContainer>
  );
};

export default RegisterForm;
