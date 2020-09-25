import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import UserKit from "./../data/UserKit";
import { BusinessContext } from "./../contexts/BusinessContext";

const UserProfileContainer = styled.div`
  display: flex;
  align-items: baseline;
  padding: 0px 10px;
  a:hover {
    text-decoration: underline;
  }
  a {
    font-size: 16px;
    font-weight: bold;
  }
  *:not(:last-child) {
    margin-right: 6px;
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
