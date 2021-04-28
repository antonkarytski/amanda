import React from "react";
import generalClasses from "./Styles.module.scss";
import { InputProps } from "./_interfaces";

export default function TextArea({ register, label, ...props }: InputProps) {
  return (
    <div className={generalClasses.InputContainer}>
      {label ? <label htmlFor={`#${register.name}`}>{label}</label> : null}
      <textarea
        id={register.name}
        autoComplete={"off"}
        {...props}
        {...register}
      />
    </div>
  );
}
