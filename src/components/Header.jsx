import React from "react";
import { Link } from "react-router-dom";
import HeaderUserElement from "./HeaderUserElement";

export default function Header() {
  return (
    <div className="header">
      <div className="centered-container">
        <Link to={`/`}>
          <h1 className="logo">FEND19 - Dmitrij Velström</h1>
        </Link>
        <HeaderUserElement />
      </div>
    </div>
  );
}
