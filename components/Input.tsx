import { IconExclamationCircle } from "@tabler/icons-react";
import { nanoid } from "nanoid";
import React, { forwardRef } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form/dist/types";

interface InputProps extends Partial<UseFormRegister<FieldValues>> {
  type: string;
  label?: string;
  errorMessage?: any;
  placeholder?: string;
}
function Input(
  {
    type = "text",
    label,
    errorMessage,
    placeholder = " ",
    ...rest
  }: InputProps,
  ref: any
) {
  const inputId = nanoid(10);
  return (
    <div className="input-wrapper">
      <div>
        <input
          ref={ref}
          id={inputId}
          type={type}
          placeholder={placeholder}
          {...rest}
        />
        {label && <label htmlFor={inputId}>{label}</label>}
      </div>
      {errorMessage && (
        <p>
          <IconExclamationCircle />
          {errorMessage}
        </p>
      )}
    </div>
  );
}

export default forwardRef(Input);
