import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import { BusinessContext } from "./contexts/BusinessContext";

import StartPage from "./pages/StartPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserVerifyPage from "./pages/UserVerifyPage";
import UserActivePage from "./pages/UserActivePage";
import CustomerDetailsPage from "./pages/CustomerDetailsPage";

function App() {
  const [activeUser, setActiveUser] = useState(null);
  const [customerList, setCustomerList] = useState(null);

  return (
    <div>
      <BusinessContext.Provider value={{ activeUser, setActiveUser, customerList, setCustomerList }}>
        <Switch>
          <Route path="/customer/:customerId" exact render={props => <CustomerDetailsPage {...props} />} />
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
