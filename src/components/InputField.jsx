import React from "react";

export default function InputField({ template }) {
  const placeholder = template.placeholder ? `${template.label} (${template.placeholder})` : template.label;
  return (
    <input
      placeholder={placeholder}
      id={template.placeholder || template.label}
      value={template.value}
      onChange={e => template.callback(e.target.value)}
      required={template.required || false}
      type={template.type || "text"}
    />
  );
}
