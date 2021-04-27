import React from "react";
import { SelectProps } from "../../_interfaces/Input";
import TextField from "@material-ui/core/TextField";

export default function SelectField({
  register,
  options,
  ...props
}: SelectProps) {
  return (
    <TextField
      select
      SelectProps={{
        native: true,
      }}
      {...props}
      {...register}
    >
      {options.map((option, index) => {
        return (
          <option key={`${register.name}${index}`} value={option.value}>
            {option.label}
          </option>
        );
      })}
    </TextField>
  );
}
