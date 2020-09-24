import React from "react";

export default function InputField({ fieldTemplate, index }) {
  return (
    <input
      placeholder={
        fieldTemplate.placeholder ? `${fieldTemplate.label} (${fieldTemplate.placeholder})` : fieldTemplate.label
      }
      id={fieldTemplate.placeholder || fieldTemplate.label}
      value={fieldTemplate.value}
      onChange={e => fieldTemplate.callback(e.target.value)}
      required={fieldTemplate.required || false}
      type={fieldTemplate.type || "text"}
    />
  );
}
