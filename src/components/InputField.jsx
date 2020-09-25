import React from "react";
import styles from "../styles/js/styles";

export default function InputField({ template }) {
  const placeholder = template.placeholder ? `${template.label} (${template.placeholder})` : template.label;

  return (
    <styles.InputContainer>
      {template.showLabel === true && <label>{template.label}</label>}
      <input
        placeholder={placeholder}
        id={template.placeholder || template.label}
        value={template.value}
        onChange={e => template.callback(e.target.value)}
        required={template.required || false}
        type={template.type || "text"}
        pattern={template.pattern}
        minLength={template.minLength}
        maxLength={template.maxLength}
      />
    </styles.InputContainer>
  );
}
