import React, { useState } from "react";
import UserKit from "../data/UserKit";
import styled from "styled-components";

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
  font-size: 1.2rem;
  label {
    margin-right: 1rem;
  }
  input {
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
    ["Organisation Name", organisationName, setOrganisationName],
    ["Organisation Kind (0, 1, 2)", organisationKind, setOrganisationKind],
  ];

  function renderInput(index, placeholder, value, setValue) {
    return (
      <InputContainer key={index}>
        <label htmlFor={placeholder}>{placeholder}:</label>
        <input
          placeholder={placeholder}
          id={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </InputContainer>
    );
  }

  function handleRegister() {
    userKit.register(
      firstName,
      lastName,
      email,
      password,
      organisationName,
      organisationKind
    );
  }

  return (
    <FlexContainer>
      <FormContainer>
        {inputItemsArray.map(([placeholder, value, setValue], index) =>
          renderInput(index, placeholder, value, setValue)
        )}
        <button onClick={handleRegister}>Register</button>
      </FormContainer>
    </FlexContainer>
  );
};

export default RegisterForm;
