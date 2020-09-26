import React, { useContext } from "react";
import GlobalLayout from "./layout/GlobalLayout";

import { BusinessContext } from "./../contexts/BusinessContext";
import styles from "./../styles/js/styles";

export default function UserVerifyPage() {
  const { emailToVerify } = useContext(BusinessContext);

  return (
    <GlobalLayout>
      <styles.WhiteCard>
        <h2 className="text-center">Please verify your account</h2>
        <p className="text-center">
          An email containing your account activation link has been sent to {emailToVerify || "your email"}.
        </p>
      </styles.WhiteCard>
    </GlobalLayout>
  );
}
