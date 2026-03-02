import React from "react";
import { RadioButtonProps } from "./RadioButton.types";

export const RadioButton = ({
  name,
  value,
  checked,
  disabled,
  onChange,
}: RadioButtonProps) => {
  return (
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  );
};