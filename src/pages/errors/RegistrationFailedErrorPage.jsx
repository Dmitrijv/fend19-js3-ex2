import React from "react";
import GlobalLayout from "./../layout/GlobalLayout";

export default function RegistrationFailedErrorPage() {
  return (
    <GlobalLayout>
      <div className="white-card">
        <p className="text-center">Could not register new account.</p>
        <p className="text-center">
          You have entered incorrect input data or specified an email adress that has already been registered.
        </p>
      </div>
    </GlobalLayout>
  );
}
