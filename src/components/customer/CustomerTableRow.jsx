import React from "react";
import { Link } from "react-router-dom";

export default function CustomerTableRow({ customer, deleteCallback }) {
  return (
    <tr>
      <td>
        <Link to={`/customer/${customer.id}`}>{customer.id}</Link>
      </td>
      <td>{customer.name}</td>
      <td>{customer.organisationNr}</td>
      <td>
        <Link to={`/edit-customer/${customer.id}`} style={{ textDecoration: "none" }}>
          <span style={{ fontSize: 30 + "px" }}>&#128736;</span>
        </Link>
      </td>
      <td>
        <button onClick={deleteCallback}>Delete</button>
      </td>
    </tr>
  );
}
