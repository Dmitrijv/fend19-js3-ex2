import React from "react";
import { Link } from "react-router-dom";
import HeaderUserElement from "./HeaderUserElement";
import styled from "styled-components";

const HeaderContainer = styled.div`

  margin-bottom: 20px;

  background-color: #293a4a; //#222c34 // 242930 // 293a4a
  color: white;

  h1.title-full {
    display: none;
  }

  h1.title-mini {
    display: block;
  }

  @media only screen and (min-width: 800px) {
    h1.title-full {
      display: block;
    }
    h1.title-mini {
      display: none;
    }
  }

  .logo-wrapper {
      font-size: 0.8rem;
    margin: 0 10px;
    padding 0 0 0 10px;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-left: 8px solid #57cc8a;
  }

  button.sign-out-btn {
    padding: 2px 6px;
  }

  div.centered-container {
    min-height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    a:visited,
    a:link {
      color: white;
      text-decoration: none;
    }
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <div className="centered-container">
        <Link to={`/`} className="logo-wrapper">
          <h1 className="title-mini">DV</h1>
          <h1 className="title-full">FEND19 - Dmitrij Velström</h1>
        </Link>
        <HeaderUserElement />
      </div>
    </HeaderContainer>
  );
}
