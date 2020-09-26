import React from "react";
import GlobalLayout from "./../layout/GlobalLayout";

export default function RegistrationFailedErrorPage() {
  return (
    <GlobalLayout>
      <div className="white-card">
        <p className="text-center">Could not register new account.</p>
        <p className="text-center">
          You have entered incorrect input data or specified email adress is already registered.
        </p>
      </div>
    </GlobalLayout>
  );
}
