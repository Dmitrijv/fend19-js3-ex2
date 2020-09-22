import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { BusinessContext } from "./../contexts/BusinessContext";
import styles from "./../styles/js/styles";
import UserKit from "./../data/UserKit";
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountActivationMsg, setAccountActivationMsg] = useState("");

  const { setUserEmail } = useContext(BusinessContext);

  function handleActivateAccount() {
    userKit.activateUser(uid, token).then(() => {
      setAccountActivationMsg("Activated!");
      history.push("/login");
    });
  }

  function handleLogin(event) {
    console.log("handle login");
    userKit
      .login(email, password)
      .then(res => res.json())
      .then(data => {
        setUserEmail(email);
        userKit.setToken(data.token);
        history.push("/home");
      });
    event.preventDefault();
  }

  return (
    <GlobalLayout>
      {/* Only show that account is beeing activated if uid and token exists in URL */}
      {uid && token && (
        <div className="centered-container">
          <div className="white-card">
            <p>Your account is being activated</p>
            {handleActivateAccount()}
          </div>
        </div>
      )}
      {/* If uid and token doesn't exist in url, render login form */}
      {!uid && !token && (
        <div className="centered-container">
          <div className="white-card">
            <FlexForm onSubmit={handleLogin}>
              <h2>{accountActivationMsg && accountActivationMsg} Please Login</h2>
              <input placeholder="email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
              <input
                placeholder="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
            </FlexForm>
          </div>
        </div>
      )}
    </GlobalLayout>
  );
}
