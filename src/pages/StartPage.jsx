import React from "react";
import { useHistory, Link } from "react-router-dom";
import UserKit from "./../data/UserKit";
import RegisterForm from "./../components/RegisterForm";
import GlobalLayout from "./layout/GlobalLayout";

export default function Start() {
  const history = useHistory();
  const userKit = new UserKit();

  // redirect to home page if we are already logged in
  if (userKit.getToken()) history.push("/home");

  return (
    <GlobalLayout>
      <div className="centered-container">
        <RegisterForm />
        <p className="white-card text-center">
          Already registered? <Link to={`/login`}>Log in here.</Link>
        </p>
      </div>
    </GlobalLayout>
  );
}
