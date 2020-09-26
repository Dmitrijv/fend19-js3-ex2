import React from "react";
import GlobalLayout from "./../layout/GlobalLayout";

export default function ActivationFailedErrorPage() {
  return (
    <GlobalLayout>
      <div className="white-card">
        <p className="text-center">Failed to activate account.</p>
        <p className="text-center">Activation link is invalid, expired, or has already been used.</p>
      </div>
    </GlobalLayout>
  );
}
