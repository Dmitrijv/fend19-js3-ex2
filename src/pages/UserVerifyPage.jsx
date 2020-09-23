import React from "react";
import GlobalLayout from "./layout/GlobalLayout";

export default function Start() {
  return (
    <GlobalLayout>
      <div className="centered-container">
        <div className="white-card">
          <h2 className="text-center">Please verify your account</h2>
          <p className="text-center">
            An email containing your account activation link has been sent to [placeholder].
          </p>
        </div>
      </div>
    </GlobalLayout>
  );
}
