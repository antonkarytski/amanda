import React, { FC } from "react";
import {
  ControlledFormModuleProps,
  UnrepeatableFormModuleProps,
} from "./_interfaces";
import CountrySelect from "../FormsBlocks/Select/CountrySelect";
import TextField from "@material-ui/core/TextField";
import Column from "../Structure/Column";

interface OrgAddressModuleProps
  extends UnrepeatableFormModuleProps,
    ControlledFormModuleProps {}

export const OrgAddressModule: FC<OrgAddressModuleProps> = ({
  register,
  control,
  ...structProps
}) => {
  return (
    <Column {...structProps}>
      <CountrySelect
        label={""}
        control={control}
        style={{ minWidth: "100px" }}
        name={"country"}
      />
      <TextField
        label={"Адрес"}
        rows={4}
        multiline
        fullWidth
        {...register("address")}
      />
    </Column>
  );
};
