import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import UserKit from "./data/UserKit";
import { BusinessContext } from "./contexts/BusinessContext";

import StartPage from "./pages/StartPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserVerifyPage from "./pages/UserVerifyPage";
import UserActivePage from "./pages/UserActivePage";

function App() {
  const userKit = new UserKit();

  const [activeUser, setActiveUser] = useState(null);
  const [customerList, setCustomerList] = useState(null);

  useEffect(() => {
    console.log("app.js is updating active user");
    userKit
      .getActiveUser()
      .then(res => res.json())
      .then(({ email, firstName, lastName }) => setActiveUser({ email, firstName, lastName }));
  }, [setActiveUser]);

  return (
    <div>
      <BusinessContext.Provider value={{ activeUser, setActiveUser, customerList, setCustomerList }}>
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/active" exact component={UserActivePage} />
          <Route path="/verify" exact component={UserVerifyPage} />
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
