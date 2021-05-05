import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";
import { P_CONTACTS } from "../../settings/dbPrefixes";
import { buildInputName } from "../../utils/helpers/strings";
import { FormModuleProps } from "./_interfaces";
import structures from "../Structure";

const ContactModule: FC<FormModuleProps> = ({
  column,
  register,
  index,
  ...structProps
}) => {
  const SpecifiedWrapper = structures[column ? "column" : "row"];

  return (
    <SpecifiedWrapper
      key={index !== undefined ? `contactBlock${index}` : "contactBlock"}
      {...structProps}
    >
      <TextField
        label="Имя"
        style={{ minWidth: "200px" }}
        {...register(buildInputName(P_CONTACTS, "name", index))}
      />
      <TextField
        label="Телефон/Email"
        fullWidth
        {...register(buildInputName(P_CONTACTS, "generalValue", index))}
      />
    </SpecifiedWrapper>
  );
};

export default ContactModule;
