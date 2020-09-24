import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";
import UnauthorizedErrorPage from "./errors/UnauthorizedErrorPage";

import styled from "styled-components";

import styles from "./../styles/js/styles";
import { BusinessContext } from "./../contexts/BusinessContext";
import UserKit from "../data/UserKit";

const CustomerSheet = styled(styles.InfoSheet)`
  width: 100%;
  border-left: 6px solid #45abcd;
`;

export default function CustomerDetailsPage() {
  const { customerId } = useParams();
  const { customerList, checkIfAuthorized } = useContext(BusinessContext);

  // get customer information from local customer list
  let customer = customerList ? customerList.find((customer) => customer.id === Number(customerId)) : null;
  // if local list is empty
  // customer = customer || userKit.getCustomerById(customerId);

  if (!customer || !customer.id) return <UnauthorizedErrorPage />;

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
