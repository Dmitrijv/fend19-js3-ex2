import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import UserKit from "./../data/UserKit";
import { BusinessContext } from "./../contexts/BusinessContext";

const UserProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0px 10px;

  & > *:not(:last-child) {
    margin-bottom: 6px;
  }

  @media only screen and (min-width: 800px) {
    flex-direction: row;
    & > *:not(:last-child) {
      margin-right: 6px;
    }
  }

  a:hover {
    text-decoration: underline;
  }

  a {
    font-size: 16px;
    font-weight: bold;
  }
`;

export default function HeaderUserElement() {
  const history = useHistory();
  const userKit = new UserKit();

  const { activeUser, setActiveUser } = useContext(BusinessContext);

  function handleLogOut(event) {
    setActiveUser(null);
    userKit.deleteToken();
    history.push("/");
    event.preventDefault();
  }

  useEffect(() => {
    if (userKit.getToken()) {
      userKit
        .getActiveUser()
        .then(res => res.json())
        .then(({ email, firstName, lastName }) => setActiveUser({ email, firstName, lastName }));
    }
  }, []);

  if (!activeUser || !activeUser.email) {
    return (
      <UserProfileContainer>
        <Link to={`/login`}>Sign In</Link>
      </UserProfileContainer>
    );
  }

  return (
    <UserProfileContainer>
      <Link to={`/home`}>{activeUser.email}</Link>
      <button className="sign-out-btn" onClick={handleLogOut}>
        Sign Out
      </button>
    </UserProfileContainer>
  );
}
