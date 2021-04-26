import React from "react";
import { SelectProps } from "../../_interfaces/Input";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

export default function SelectField({
  register,
  options,
  ...props
}: SelectProps) {
  return (
    <TextField select defaultValue={options[0].value} {...props} {...register}>
      {options.map((option, index) => {
        return (
          <MenuItem key={`${register.name}${index}`} value={option.value}>
            {option.label}
          </MenuItem>
        );
      })}
    </TextField>
  );
}
