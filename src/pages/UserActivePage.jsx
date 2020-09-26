import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";

import { BusinessContext } from "./../contexts/BusinessContext";
import heheBusinessImg from "./../image/haha_business.png";

export default function UserActivePage() {
  const { setEmailToVerify } = useContext(BusinessContext);

  useEffect(() => {
    setEmailToVerify(null);
  }, []);

  return (
    <GlobalLayout>
      <div className="white-card text-center">
        <img src={heheBusinessImg} alt="verified" />
        <p>Your account has been activated successfully.</p>
        <p>
          You can now <Link to={`/login`}>Sign In here.</Link>{" "}
        </p>
      </div>
    </GlobalLayout>
  );
}
