import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

import UserKit from "./../data/UserKit";
import { BusinessContext } from "./../contexts/BusinessContext";

import GlobalLayout from "./layout/GlobalLayout";
import ActiveUserSheet from "../components/ActiveUserSheet";
import CustomerTable from "../components/customer/CustomerTable";
import CreateCustomerForm from "../components/customer/CreateCustomerForm";
import UnauthorizedErrorPage from "./errors/UnauthorizedErrorPage";

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
  const { activeUser, customerList, checkIfAuthorized, fetchCustomerList } = useContext(BusinessContext);
  const [isUserAuthorized, setIsUserAuthorized] = useState(null);

  useEffect(() => {
    // setIsUserAuthorized(true);
    // if (!customerList) fetchCustomerList();
    checkIfAuthorized().then(isAuthorized => {
      if (isAuthorized === false) {
        setIsUserAuthorized(false);
        return;
      } else {
        setIsUserAuthorized(true);
        if (!customerList) fetchCustomerList();
      }
    });
  }, []);

  // avoid "blinking" of error page while we figure out if user is authorized or not
  if (isUserAuthorized === null) return <GlobalLayout />;
  // show error page if we know for sure user is not authorized
  else if (isUserAuthorized === false) return <UnauthorizedErrorPage />;

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
