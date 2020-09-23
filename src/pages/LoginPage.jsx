import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import UserKit from "./../data/UserKit";
import { BusinessContext } from "./../contexts/BusinessContext";
import styles from "./../styles/js/styles";

import GlobalLayout from "./layout/GlobalLayout";

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
  *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default function LoginPage() {
  const userKit = new UserKit();
  const history = useHistory();

  // Use URL Search Params to parse the query parameters from the url
  const params = new URLSearchParams(history.location.search);
  const uid = params.get("uid");
  const token = params.get("token");

  function handleActivateAccount() {
    userKit.activateUser(uid, token).then(() => {
      history.push("/active");
    });
  }

  if (uid && token) handleActivateAccount();

  const { setActiveUser } = useContext(BusinessContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function updateActiveUser() {
    userKit
      .getActiveUser()
      .then(res => res.json())
      .then(({ email, firstName, lastName }) => setActiveUser({ email, firstName, lastName }));
  }

  function handleLogin(event) {
    userKit
      .login(email, password)
      .then(res => res.json())
      .then(data => {
        userKit.setToken(data.token);
        updateActiveUser();
      })
      .then(() => {
        history.push("/home");
      });
    event.preventDefault();
  }

  return (
    <GlobalLayout>
      {/* If uid and token doesn't exist in url, render login form */}
      {!uid && !token && (
        <div className="centered-container">
          <div className="white-card">
            <FlexForm onSubmit={handleLogin}>
              <h2>Sign In</h2>
              <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
              <input
                placeholder="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button type="submit">Sign In</button>
            </FlexForm>
          </div>
        </div>
      )}
    </GlobalLayout>
  );
}
