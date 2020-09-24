import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import UserKit from "./data/UserKit";
import { BusinessContext } from "./contexts/BusinessContext";

import StartPage from "./pages/StartPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserVerifyPage from "./pages/UserVerifyPage";
import UserActivePage from "./pages/UserActivePage";
import CustomerDetailsPage from "./pages/CustomerDetailsPage";
import EditCustomerPage from "./pages/EditCustomerPage";

function App() {
  const userKit = new UserKit();

  const [activeUser, setActiveUser] = useState(null);
  const [customerList, setCustomerList] = useState(null);

  function fetchCustomerList() {
    userKit
      .getCustomerList()
      .then((res) => res.json())
      .then((data) => {
        setCustomerList(data.results);
      });
  }

  function checkIfAuthorized() {
    // we don't have a token
    if (!userKit.getToken()) {
      return false;
    } else {
      // we are not considered an active user by the backend server
      userKit.getActiveUser().then((response) => {
        return response.status === 401 ? false : true;
      });
    }
  }

  return (
    <div>
      <BusinessContext.Provider
        value={{ activeUser, setActiveUser, customerList, fetchCustomerList, checkIfAuthorized }}
      >
        <Switch>
          <Route path="/edit-customer/:customerId" render={(props) => <EditCustomerPage {...props} />} />
          <Route path="/customer/:customerId" render={(props) => <CustomerDetailsPage {...props} />} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/verify" exact component={UserVerifyPage} />
          <Route path="/active" exact component={UserActivePage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/" exact component={StartPage} />
        </Switch>
      </BusinessContext.Provider>
    </div>
  );
}

export default App;

/*
email: nackademin@willandskill.se
password: js-fend-19
*/
