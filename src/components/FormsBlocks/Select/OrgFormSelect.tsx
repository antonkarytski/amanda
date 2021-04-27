import React from "react";
import { SpecifiedSelectProps } from "../../_interfaces/Input";
import ControlledSelectField from "./ControlledSelectField";
import organisationForms from "../../../forms/datas/organisationForms.json";

export default function OrgFormSelect({
  withDefault,
  label,
  ...props
}: SpecifiedSelectProps) {
  return (
    <ControlledSelectField
      label={label ?? "Организационная форма"}
      options={organisationForms}
      {...props}
    />
  );
}
