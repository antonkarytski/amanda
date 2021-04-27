import React from "react";
import { convertToOptions } from "../../../utils/helpers/listsConverter";
import currency from "../../../forms/datas/currency.json";
import { SpecifiedSelectProps } from "../../_interfaces/Input";
import { generalCurrency } from "../../../forms/additionalListValues";
import ControlledSelectField from "./ControlledSelectField";

const currencyOptions = convertToOptions(currency);

export default function CurrencySelect({
  withDefault,
  label,
  ...props
}: SpecifiedSelectProps) {
  return (
    <ControlledSelectField
      label={label ?? "Валюта"}
      options={
        withDefault ? [generalCurrency, ...currencyOptions] : currencyOptions
      }
      {...props}
    />
  );
}
