import React from "react";
import { Link } from "react-router-dom";
import RegisterForm from "./../components/RegisterForm";
import GlobalLayout from "./layout/GlobalLayout";

import styles from "./../styles/js/styles";

export default function Start() {
  return (
    <GlobalLayout>
      <styles.WhiteCard>
        <RegisterForm />
      </styles.WhiteCard>
      <styles.WhiteCard>
        <p className="text-center">
          Already registered? <Link to={`/login`}>Sign in here.</Link>
        </p>
      </styles.WhiteCard>
    </GlobalLayout>
  );
}
