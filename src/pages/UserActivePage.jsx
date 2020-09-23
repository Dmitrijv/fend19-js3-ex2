import React from "react";
import { Link } from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";

import heheBusinessImg from "./../image/haha_business.png";

export default function UserActivePage() {
  return (
    <GlobalLayout>
      <div className="centered-container">
        <div className="white-card text-center">
          <img src={heheBusinessImg} alt="verified" />
          <p>Your account has been activated successfully.</p>
          <p>
            You can now <Link to={`/login`}>Sign In here.</Link>{" "}
          </p>
        </div>
      </div>
    </GlobalLayout>
  );
}
