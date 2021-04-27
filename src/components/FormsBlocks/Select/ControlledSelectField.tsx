import React from "react";
import SelectField from "./SelectField";
import { Controller } from "react-hook-form";
import { ControlledSelectProps } from "../../_interfaces/Input";

export default function ControlledSelectField({
  name,
  control,
  options,
  ...props
}: ControlledSelectProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={options[0].value}
      render={({ field }) => (
        <SelectField options={options} register={field} {...props} />
      )}
    />
  );
}
