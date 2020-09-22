import React, { useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import "./App.css";
import UserKit from "./data/UserKit";
import RegisterForm from "./components/RegisterForm";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customerList, setCustomerList] = useState([]);
  const userKit = new UserKit();
  const history = useHistory();
  // Use URL Search Params to parse the query parameters from the url
  const params = new URLSearchParams(history.location.search);
  const uid = params.get("uid");
  const token = params.get("token");

  function handleActivateAccount() {
    userKit.activateUser(uid, token).then(history.push("/login"));
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

  function fetchClients() {
    userKit
      .getCustomerList()
      .then(res => res.json())
      .then(data => {
        setCustomerList(data.results);
      });
  }

  function handleCreateCustomer() {
    const payload = {
      name: "My first client"
    };
    userKit
      .createCustomer(payload)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        fetchClients();
      });
  }

  return (
    <div>
      <Switch>
        <Route path="/home">
          <h1>Welcome to Business Application</h1>
          <button onClick={fetchClients}>Get my Clients</button>
          {customerList.map(customerItem => {
            return <p>{customerItem.name}</p>;
          })}
          <button onClick={handleCreateCustomer}>Create test customer</button>
        </Route>
        <Route path="/login">
          <h1>Activate account</h1>
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
              <p>Your account is now active. Please Login</p>
              <input placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
              <input placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
              <button onClick={handleLogin}>Login</button>
            </div>
          )}
        </Route>
        <Route path="/">
          <h2>Register New User</h2>
          <RegisterForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

/*
email: nackademin@willandskill.se
password: js-fend-19
*/
