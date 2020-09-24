import React, { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import GlobalLayout from "./layout/GlobalLayout";

import styled from "styled-components";

import styles from "../styles/js/styles";
import { BusinessContext } from "../contexts/BusinessContext";

export default function EditCustomerPage() {
  const { customerId } = useParams();
  const { customerList } = useContext(BusinessContext);
  let customer = customerList ? customerList.find(customer => customer.id === Number(customerId)) : null;

  return <GlobalLayout>helo</GlobalLayout>;
}
