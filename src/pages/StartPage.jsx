import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import RegisterForm from "./../components/RegisterForm";
import GlobalLayout from "./layout/GlobalLayout";

import { BusinessContext } from "./../contexts/BusinessContext";

export default function Start() {
  const history = useHistory();
  const { userEmail } = useContext(BusinessContext);

  // redirect to home page if we are already logged in
  if (userEmail) {
    history.push("/home");
  }

  return (
    <GlobalLayout>
      <div className="white-card">
        <RegisterForm />
      </div>
      <div className="white-card">
        <p className="text-center">
          Already registered? <Link to={`/login`}>Sign in here.</Link>
        </p>
      </div>
    </GlobalLayout>
  );
}
