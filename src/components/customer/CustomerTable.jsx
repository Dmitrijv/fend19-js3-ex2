import React from "react";
import styled from "styled-components";

import styles from "../../styles/js/styles";
import CustomerTableRow from "./CustomerTableRow";
import { Table, Thead, Tbody, Tr, Th } from "react-super-responsive-table";

import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import "./../../styles/sass/_customer-table-override.scss";

const CustomerSheet = styled(styles.InfoSheet)`
  width: 100%;
`;

export default function CustomerTable({ customerList }) {
  return (
    <CustomerSheet>
      <h2>{customerList.length} customer(s) on record</h2>
      <Table className="customer-table">
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
