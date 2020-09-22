import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="App">
      <Switch>

        <Route path="/" exact>
          <h2>Register</h2>
          <p>Enter Details to register:</p>
          <RegisterForm />
        </Route>

        <Route path='/login' exact>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
