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
      <h2>Register New User</h2>
      <p>
        Already registered? <Link to={`/login`}>Log in here.</Link>
      </p>
      <RegisterForm />
    </GlobalLayout>
  );
}
