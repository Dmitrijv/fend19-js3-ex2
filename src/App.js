import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import { BusinessContext } from "./contexts/BusinessContext";

import StartPage from "./pages/StartPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";

function App() {
  const [email, setEmail] = useState("");
  return (
    <div>
      <BusinessContext.Provider value={{ email, setEmail }}>
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
