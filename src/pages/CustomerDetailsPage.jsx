import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";
import UnauthorizedErrorPage from "./errors/UnauthorizedErrorPage";

import styled from "styled-components";
import styles from "./../styles/js/styles";

import UserKit from "../data/UserKit";
import { BusinessContext } from "./../contexts/BusinessContext";

const CustomerSheet = styled(styles.InfoSheet)`
  width: 100%;
  @media only screen and (min-width: 800px) {
    max-width: 420px;
  }
  margin: 0 auto;
  border-left: 6px solid #45abcd;
`;

export default function CustomerDetailsPage() {
  const userKit = new UserKit();
  const { customerId } = useParams();
  const { customerList, checkIfAuthorized } = useContext(BusinessContext);

  const [isUserAuthorized, setIsUserAuthorized] = useState(null);
  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    checkIfAuthorized().then(isAuthorized => {
      if (isAuthorized === false) {
        setIsUserAuthorized(false);
        return;
      } else {
        setIsUserAuthorized(true);
        // check if we already have this customer in local customerList before making a network request
        setCustomer(customerList ? customerList.find(customer => customer.id === Number(customerId)) : null);
        // otherwise get customer data from the api
        if (!customer) {
          userKit
            .getCustomerById(customerId)
            .then(res => res.json())
            .then(response => setCustomer(response));
        }
      }
    });
  }, []);

  // avoid "blinking" error page on screen  while we fetch authorization and customer data from the api
  if (isUserAuthorized === null || (isUserAuthorized === true && !customer)) return <GlobalLayout />;
  // show error page if we know for sure user is not authorized or customer doesn't exist
  else if (isUserAuthorized === false || !customer) return <UnauthorizedErrorPage />;

  return (
    <GlobalLayout>
      <div className="white-card">
        {!customer && <p>Customer not found.</p>}
        {customer && (
          <styles.FlexContainer>
            <CustomerSheet>
              <h2>Customer #{customer.id}</h2>
              <div>
                <strong>Name: </strong> {customer.name || "n/a"}
              </div>
              <div>
                <strong>Email: </strong> {customer.email || "n/a"}
              </div>
              <div>
                <strong>Phone Nr: </strong> {customer.phoneNumber || "n/a"}
              </div>
              <div>
                <strong>Reference: </strong> {customer.reference || "n/a"}
              </div>
              <div>
                <strong>Organisation nr: </strong> {customer.organisationNr || "n/a"}
              </div>
              <div>
                <strong>Vat nr: </strong> {customer.vatNr || "n/a"}
              </div>
              <div>
                <strong>Payment Term: </strong> {customer.paymentTerm} days
              </div>
              <div>
                <strong>Website: </strong> {customer.website || "n/a"}
              </div>
            </CustomerSheet>
            <button>UPDATE</button>
            <button>DELETE</button>
          </styles.FlexContainer>
        )}
      </div>
    </GlobalLayout>
  );
}
