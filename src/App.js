import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import { BusinessContext } from "./contexts/BusinessContext";

import StartPage from "./pages/StartPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  const [userEmail, setUserEmail] = useState(null);
  return (
    <div>
      <BusinessContext.Provider value={{ userEmail, setUserEmail }}>
        <Switch>
          <Route path="/home" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />
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
