import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function CustomerTableRow({ customer, deleteCallback }) {
  const history = useHistory();
  function navigateToEditPage(customer) {
    history.push(`/edit-customer/${customer.id}`);
  }
  return (
    <tr>
      <td>
        <Link to={`/customer/${customer.id}`}>{customer.id}</Link>
      </td>
      <td>{customer.name}</td>
      <td>{customer.organisationNr}</td>
      <td>{customer.reference}</td>
    </tr>
  );
}
