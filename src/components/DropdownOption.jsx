import React from "react";

export default function DropdownOption({ option }) {
  return <option value={option.id}>{option.label}</option>;
}
