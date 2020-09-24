import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import UserKit from "./../data/UserKit";
import { BusinessContext } from "./../contexts/BusinessContext";

import GlobalLayout from "./layout/GlobalLayout";
import ActiveUserSheet from "../components/ActiveUserSheet";
import CustomerTable from "../components/customer/CustomerTable";
import CreateCustomerForm from "../components/customer/CreateCustomerForm";

const CustomerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
  @media only screen and (min-width: 800px) {
    flex-direction: row;
    align-items: flex-start;
    & > *:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

export default function HomePage() {
  const userKit = new UserKit();
  const history = useHistory();

  const { activeUser, customerList, fetchCustomerList } = useContext(BusinessContext);

  useEffect(() => {
    // we don't have a token
    if (!userKit.getToken()) {
      history.push("/");
      return;
    } else {
      // we are not considered an active user by the backend server
      userKit.getActiveUser().then(response => {
        if (response.status === 401) {
          history.push("/");
          return;
        } else {
          fetchCustomerList();
        }
      });
    }
  }, []);

  return (
    <GlobalLayout>
      <div className="white-card">
        {activeUser && <ActiveUserSheet activeUser={activeUser} />}
        <CustomerInfoWrapper>
          <CreateCustomerForm />
          {customerList && <CustomerTable customerList={customerList} />}
        </CustomerInfoWrapper>
      </div>
    </GlobalLayout>
  );
}
