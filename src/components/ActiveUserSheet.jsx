import React from "react";
import styled from "styled-components";

import styles from "./../styles/js/styles";

const UserSheet = styled(styles.InfoSheet)`
  border-left: 6px solid #45abcd;
`;

export default function ActiveUserSheet({ activeUser }) {
  return (
    <UserSheet>
      <h2>Signed In As:</h2>
      <div>
        <strong>Email: </strong> {activeUser.email}
      </div>
      <div>
        <strong>First Name: </strong> {activeUser.firstName}
      </div>
      <div>
        <strong>Last Name: </strong> {activeUser.lastName}
      </div>
    </UserSheet>
  );
}
