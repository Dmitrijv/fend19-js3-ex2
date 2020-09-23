import React from "react";
import Header from "../../components/Header";

export default function GlobalLayout({ children }) {
  return (
    <div>
      <Header />
      <main>
        <div className="centered-container">{children}</div>
      </main>
    </div>
  );
}
