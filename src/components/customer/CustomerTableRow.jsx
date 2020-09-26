import React from "react";
import { Link } from "react-router-dom";

import { Tr, Td } from "react-super-responsive-table";

export default function CustomerTableRow({ customer }) {
  return (
    <Tr>
      <Td>
        <Link to={`/customer/${customer.id}`}>{customer.id}</Link>
      </Td>
      <Td>{customer.name}</Td>
      <Td>{customer.organisationNr}</Td>
      <Td>{customer.reference}</Td>
    </Tr>
  );
}
