import React, { useState } from "react";

import UserKit from "./../data/UserKit";
import GlobalLayout from "./layout/GlobalLayout";

export default function HomePage() {
  const userKit = new UserKit();

  const [customerList, setCustomerList] = useState([]);

  function fetchClients() {
    userKit
      .getCustomerList()
      .then(res => res.json())
      .then(data => {
        setCustomerList(data.results);
      });
  }

  function handleCreateCustomer() {
    const payload = {
      name: "My first client"
    };
    userKit
      .createCustomer(payload)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        fetchClients();
      });
  }

  return (
    <GlobalLayout>
      <h1>Welcome to Business Application</h1>
      <button onClick={fetchClients}>Get my Clients</button>
      {customerList.map(customerItem => {
        console.log(customerList);
        return <p>{customerItem.name}</p>;
      })}
      <button onClick={handleCreateCustomer}>Create test customer</button>
    </GlobalLayout>
  );
}
