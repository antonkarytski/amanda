import React, { FC } from "react";
import { buildInputName } from "../../utils/helpers/strings";
import { P_CEOS } from "../../settings/dbPrefixes";
import TextField from "@material-ui/core/TextField";
import { FormModuleProps } from "./_interfaces";
import structures from "../Structure";
import formClasses from "../Forms/Forms.module.scss";
import cx from "classnames";
import structure from "../Structure/Structure.module.scss";

const CeoNameModule: FC<FormModuleProps> = ({
  column,
  register,
  index,
  ...structProps
}) => {
  const SpecifiedWrapper = structures[column ? "column" : "row"];

  return (
    <SpecifiedWrapper
      key={index !== undefined ? `accountBlock${index}` : "accountBlock"}
      {...structProps}
    >
      <div>
        <TextField
          className={formClasses.CeoAttr}
          label={"Должность"}
          {...register(buildInputName(P_CEOS, "position", index))}
        />
        <TextField
          className={cx(structure.LeftMargin, formClasses.CeoAttr)}
          label={"Должность"}
          helperText="В родительном падеже"
          {...register(buildInputName(P_CEOS, "positionGenitive", index))}
        />
      </div>
      <div>
        <TextField
          className={formClasses.CeoAttr}
          label={"ФИО"}
          {...register(buildInputName(P_CEOS, "name", index))}
        />
        <TextField
          className={cx(structure.LeftMargin, formClasses.CeoAttr)}
          label={"ФИО"}
          helperText="В родительном падеже"
          {...register(buildInputName(P_CEOS, "nameGenitive", index))}
        />
      </div>
      <TextField
        fullWidth
        label={"Основание действия"}
        helperText="В родительном падеже"
        {...register(buildInputName(P_CEOS, "basisOfWork", index))}
      />
    </SpecifiedWrapper>
  );
};

export default CeoNameModule;
