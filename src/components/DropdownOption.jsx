import React from "react";

export default function DropdownOption({ orgId, orgLabel }) {
  return <option value={orgId}>{orgLabel}</option>;
}
