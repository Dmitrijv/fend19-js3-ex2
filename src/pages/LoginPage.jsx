import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { BusinessContext } from "./../contexts/BusinessContext";

import UserKit from "./../data/UserKit";
import GlobalLayout from "./layout/GlobalLayout";

export default function LoginPage() {
  const userKit = new UserKit();
  const history = useHistory();

  // Use URL Search Params to parse the query parameters from the url
  const params = new URLSearchParams(history.location.search);
  const uid = params.get("uid");
  const token = params.get("token");

  const { email, setEmail } = useContext(BusinessContext);
  const [password, setPassword] = useState("");
  const [accountActivationMsg, setAccountActivationMsg] = useState("");

  function handleActivateAccount() {
    userKit.activateUser(uid, token).then(() => {
      setAccountActivationMsg("Account activated!");
      history.push("/login");
    });
  }

  function handleLogin() {
    userKit
      .login(email, password)
      .then(res => res.json())
      .then(data => {
        userKit.setToken(data.token);
        history.push("/home");
      });
  }

  return (
    <GlobalLayout>
      {/* Only show that account is beeing activated if uid and token exists in URL */}
      {uid && token && (
        <div>
          <p>Your account is being activated</p>
          {handleActivateAccount()}
        </div>
      )}
      {/* If uid and token doesn't exist in url, render login form */}
      {!uid && !token && (
        <div>
          <p>{accountActivationMsg && accountActivationMsg} Please Login</p>
          <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </GlobalLayout>
  );
}
