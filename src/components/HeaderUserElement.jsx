import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import UserKit from "./../data/UserKit";
import { BusinessContext } from "./../contexts/BusinessContext";

const UserProfileContainer = styled.div`
  padding: 10px;
  a {
    font-size: 16px;
    font-weight: bold;
  }
`;

export default function HeaderUserElement() {
  const history = useHistory();
  const userKit = new UserKit();

  const { userEmail, setUserEmail } = useContext(BusinessContext);

  function handleLogOut(event) {
    setUserEmail(null);
    userKit.deleteToken();
    history.push("/");
    event.preventDefault();
  }

  if (!userEmail || userEmail.lenth === 0) {
    return (
      <UserProfileContainer>
        <Link to={`/login`}>Sign In</Link>
      </UserProfileContainer>
    );
  }

  return (
    <UserProfileContainer>
      <Link to={`/home`}>{userEmail}</Link>
      <button onClick={handleLogOut}>Sign Out</button>
    </UserProfileContainer>
  );
}
