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
import UnauthorizedErrorPage from "./pages/errors/UnauthorizedErrorPage";
import RegistrationFailedErrorPage from "./pages/errors/RegistrationFailedErrorPage";
import ActivationFailedErrorPage from "./pages/errors/ActivationFailedErrorPage";

function App() {
  const userKit = new UserKit();

  const [activeUser, setActiveUser] = useState(null);
  const [emailToVerify, setEmailToVerify] = useState(null);
  const [customerList, setCustomerList] = useState(null);

  function fetchCustomerList() {
    userKit
      .getCustomerList()
      .then(res => res.json())
      .then(data => {
        setCustomerList(data.results.sort((a, b) => a.id > b.id));
      });
  }

  async function checkIfAuthorized() {
    let isAuthorized = false;
    // we don't have a token
    if (!userKit.getToken()) {
      isAuthorized = false;
    } else {
      // check if token is still valid
      const response = await userKit.getActiveUser();
      isAuthorized = response.status === 401 ? false : true;
    }
    return isAuthorized;
  }

  return (
    <div>
      <BusinessContext.Provider
        value={{
          activeUser,
          setActiveUser,
          customerList,
          fetchCustomerList,
          checkIfAuthorized,
          emailToVerify,
          setEmailToVerify
        }}
      >
        <Switch>
          <Route path="/edit-customer/:customerId" render={props => <EditCustomerPage {...props} />} />
          <Route path="/customer/:customerId" render={props => <CustomerDetailsPage {...props} />} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/verify" exact component={UserVerifyPage} />
          <Route path="/active" exact component={UserActivePage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/" exact component={StartPage} />
          <Route path="/register-fail" exact component={RegistrationFailedErrorPage} />
          <Route path="/activation-fail" exact component={ActivationFailedErrorPage} />
          <Route path="*" exact component={UnauthorizedErrorPage} />
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
