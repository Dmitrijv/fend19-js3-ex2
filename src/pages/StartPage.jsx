import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "./../components/RegisterForm";
import GlobalLayout from "./layout/GlobalLayout";

export default function Start() {
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
