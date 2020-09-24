import React from "react";
import GlobalLayout from "./../layout/GlobalLayout";

export default function UnauthorizedErrorPage() {
  return (
    <GlobalLayout>
      <div className="white-card">
        <p className="text-center">This page doesn't exist or you are not authorized to view it.</p>
      </div>
    </GlobalLayout>
  );
}
