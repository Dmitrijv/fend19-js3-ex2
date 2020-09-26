import React from "react";
import GlobalLayout from "./layout/GlobalLayout";

export default function UserVerifyPage() {
  return (
    <GlobalLayout>
      <div className="white-card">
        <h2 className="text-center">Please verify your account</h2>
        <p className="text-center">An email containing your account activation link has been sent to [placeholder].</p>
      </div>
    </GlobalLayout>
  );
}
