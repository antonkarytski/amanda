import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";
import { buildInputName } from "../../utils/helpers/strings";
import { P_ACCOUNTS } from "../../settings/dbPrefixes";
import { ControlledFormModuleProps } from "./_interfaces";
import structures from "../Structure";
import CurrencySelect from "../FormsBlocks/Select/CurrencySelect";

const AccountModule: FC<ControlledFormModuleProps> = ({
  column,
  register,
  index,
  control,
  ...structProps
}) => {
  const SpecifiedWrapper = structures[column ? "column" : "row"];

  return (
    <SpecifiedWrapper
      key={index !== undefined ? `accountBlock${index}` : "accountBlock"}
      {...structProps}
    >
      <CurrencySelect
        withDefault
        name={buildInputName(P_ACCOUNTS, "currency", index)}
        style={{ minWidth: "250px" }}
        control={control}
      />
      <TextField
        label="Реквизиты"
        multiline
        fullWidth
        rows={6}
        {...register(buildInputName(P_ACCOUNTS, "details", index))}
      />
    </SpecifiedWrapper>
  );
};

export default AccountModule;
