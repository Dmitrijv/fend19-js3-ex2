import React from "react";
import styles from "../styles/js/styles";

import DropdownOption from "./DropdownOption";

export default function InputField({ template }) {
  const placeholder = template.placeholder ? `${template.label} (${template.placeholder})` : template.label;

  if (template.type === "select") {
    return (
      <styles.InputContainer>
        {template.showLabel === true && <label htmlFor={template.label}>{template.label}</label>}
        <select
          id={template.id}
          name={template.label}
          //   value={template.value}
          defaultValue={template.defaultValue}
          onChange={e => template.callback(e.target.value)}
          required={template.required || false}
        >
          {template.optionList.map(option => {
            return <DropdownOption key={`dropdown-key-${option.id}`} option={option} />;
          })}
        </select>
      </styles.InputContainer>
    );
  }

  return (
    <styles.InputContainer>
      {template.showLabel === true && <label htmlFor={template.label}>{template.label}</label>}
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
