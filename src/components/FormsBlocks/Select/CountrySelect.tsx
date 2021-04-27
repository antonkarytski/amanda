import React from "react";
import { convertToOptions } from "../../../utils/helpers/listsConverter";
import { SpecifiedSelectProps } from "../../_interfaces/Input";
import ControlledSelectField from "./ControlledSelectField";
import countries from "../../../forms/datas/countries.json";

const countriesOptions = convertToOptions(countries);

export default function CountrySelect({
  withDefault,
  label,
  ...props
}: SpecifiedSelectProps) {
  return (
    <ControlledSelectField
      label={label ?? "Страна"}
      options={countriesOptions}
      {...props}
    />
  );
}
