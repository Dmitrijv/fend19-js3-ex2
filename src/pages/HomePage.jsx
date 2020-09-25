import React, { useContext, useEffect, useState } from "react";
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
    #create-customer-container {
      min-width: 250px;
    }
  }
`;

export default function HomePage() {
  const history = useHistory();

  const { activeUser, customerList, checkIfAuthorized, fetchCustomerList } = useContext(BusinessContext);

  useEffect(() => {
    checkIfAuthorized().then(isAuthorized => {
      if (isAuthorized === false) {
        history.push("/");
        return;
      } else {
        if (!customerList) fetchCustomerList();
      }
    });
  }, []);

  return (
    <GlobalLayout>
      <div className="white-card">
        {activeUser && <ActiveUserSheet activeUser={activeUser} />}
        <CustomerInfoWrapper>
          {customerList && <CreateCustomerForm />}
          {customerList && <CustomerTable customerList={customerList} />}
        </CustomerInfoWrapper>
      </div>
    </GlobalLayout>
  );
}
