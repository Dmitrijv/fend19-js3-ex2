import React, { useState, useContext, useEffect } from "react";
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

  const params = new URLSearchParams(history.location.search);
  const [uid, setUid] = useState(params.get("uid"));
  const [token, setToken] = useState(params.get("token"));

  const { setActiveUser } = useContext(BusinessContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleActivateAccount() {
    userKit.activateUser(uid, token).then(response => {
      if (response.ok === true) {
        setUid(null);
        setToken(null);
        history.push("/active");
      } else {
        history.push("/activation-fail");
      }
    });
  }

  useEffect(() => {
    // if we have been navigated to this page through an account activation link, handle that proccess
    if (uid && token) handleActivateAccount();
  }, []);

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
      )}
    </GlobalLayout>
  );
}
