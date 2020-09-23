import React from "react";
import styled from "styled-components";

import styles from "../../styles/js/styles";
import UserKit from "./../../data/UserKit";
import CustomerTableRow from "./CustomerTableRow";

const CustomerSheet = styled(styles.InfoSheet)`
  width: 100%;
`;

const CustomerTableTag = styled.table`
  width: 100%;
  border: none;
  thead,
  thead tr {
    color: white;
    background-color: #85aa53;
  }

  tbody tr:hover {
    background-color: white;
  }

  tbody td,
  thead th {
    padding: 5px;
  }

  thead th {
    text-align: left;
  }
`;

export default function CustomerTable({ customerList }) {
  const userKit = new UserKit();
  return (
    <CustomerSheet>
      <h2>{customerList.length} customer(s) on record</h2>
      <CustomerTableTag>
        <thead>
          <tr>
            <th>Reference #</th>
            <th>Name</th>
            <th>Organisation</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {customerList.map(function(customer, index) {
            const deleteCallback = () => userKit.deleteCustomer(customer.id);
            return (
              <CustomerTableRow key={`customer-row-${index}`} customer={customer} deleteCallback={deleteCallback} />
            );
          })}
        </tbody>
      </CustomerTableTag>
    </CustomerSheet>
  );
}