import React, { useContext } from "react";
import styled from "styled-components";

import styles from "../../styles/js/styles";
import CustomerTableRow from "./CustomerTableRow";
import { Table, Thead, Tbody, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

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
  return (
    <CustomerSheet>
      <h2>{customerList.length} customer(s) on record</h2>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Organisation</Th>
            <Th>Reference</Th>
          </Tr>
        </Thead>
        <Tbody>
          {customerList.map(function(customer, index) {
            return <CustomerTableRow key={`cstmr-row-${index}`} customer={customer} />;
          })}
        </Tbody>
      </Table>
    </CustomerSheet>
  );
}
