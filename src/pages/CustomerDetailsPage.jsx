import React, { useContext, useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";
import UnauthorizedErrorPage from "./errors/UnauthorizedErrorPage";

import styled from "styled-components";
import styles from "./../styles/js/styles";

import UserKit from "../data/UserKit";
import { BusinessContext } from "./../contexts/BusinessContext";

import delete64 from "./../image/delete64.png";
import edit64 from "./../image/edit64.png";

const CustomerSheet = styled(styles.InfoSheet)`
  width: 100%;
  @media only screen and (min-width: 800px) {
    max-width: 420px;
  }
  margin: 0 auto;
  border: 1px solid lightgray;
`;

const InfoSheetLine = styled.div`
  font-size: 1rem;
`;

const ActionContainer = styled.div`
  ${styles.ColumnForm};
  align-items: center;
  img {
    margin: 0 0 0 5px;
  }
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px auto;
  button {
    font-size: 1rem;
    height: 42px;
    width: 100%;
    cursor: pointer;
  }
  @media only screen and (min-width: 800px) {
    max-width: 420px;
  }
`;

export default function CustomerDetailsPage() {
  const userKit = new UserKit();
  const history = useHistory();

  const { customerId } = useParams();
  const { customerList, checkIfAuthorized } = useContext(BusinessContext);

  const [isUserAuthorized, setIsUserAuthorized] = useState(null);
  const [customer, setCustomer] = useState(null);

  function handleEditCustomer() {
    history.push(`/edit-customer/${customer.id}`);
  }

  function handleDeleteCustomer() {
    if (window.confirm(`Delete customer #${customer.id}?`) === true) {
      userKit.deleteCustomer(customer.id).then(() => history.push("/home"));
    }
  }

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
              <h2>Customer #{customer.id} </h2>
              <InfoSheetLine>
                <strong>Name: </strong> {customer.name || ""}
              </InfoSheetLine>
              <InfoSheetLine>
                <strong>Email: </strong> {customer.email || ""}
              </InfoSheetLine>
              <InfoSheetLine>
                <strong>Phone Nr: </strong> {customer.phoneNumber || ""}
              </InfoSheetLine>
              <InfoSheetLine>
                <strong>Reference: </strong> {customer.reference || ""}
              </InfoSheetLine>
              <InfoSheetLine>
                <strong>Organisation nr: </strong> {customer.organisationNr || ""}
              </InfoSheetLine>
              <InfoSheetLine>
                <strong>Vat nr: </strong> {customer.vatNr || ""}
              </InfoSheetLine>
              <InfoSheetLine>
                <strong>Payment Term: </strong> {customer.paymentTerm} days
              </InfoSheetLine>
              <InfoSheetLine>
                <strong>Website: </strong> {customer.website || ""}
              </InfoSheetLine>
            </CustomerSheet>
            <ActionContainer>
              <Action>
                <styles.GreenBtn onClick={handleEditCustomer}>edit customer #{customer.id}</styles.GreenBtn>
                <img src={edit64} alt={`edit customer #${customer.id}`} title={`edit customer #${customer.id}`} />
              </Action>
              <Action>
                <styles.RedBtn onClick={handleDeleteCustomer}>delete customer #{customer.id}</styles.RedBtn>
                <img src={delete64} alt={`delete customer #${customer.id}`} title={`delete customer #${customer.id}`} />
              </Action>
            </ActionContainer>
          </styles.FlexContainer>
        )}
      </div>
    </GlobalLayout>
  );
}
