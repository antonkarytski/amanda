import OrgFormSelect from "./Select/OrgFormSelect";
import TextField from "@material-ui/core/TextField";
import Row from "../Structure/Row";
import React, { FC } from "react";
import { Control, UseFormRegister } from "react-hook-form/dist/types/form";

interface OrgNameFieldProps {
  register: UseFormRegister<any>;
  control: Control;
}

const OrgNameField: FC<OrgNameFieldProps> = ({ control, register }) => {
  return (
    <Row>
      <OrgFormSelect
        label={"Организация:"}
        name={"form"}
        control={control}
        style={{ minWidth: "100px" }}
      />
      <TextField
        fullWidth
        label="Официальное название"
        {...register("officialName")}
      />
    </Row>
  );
};

export default OrgNameField;
