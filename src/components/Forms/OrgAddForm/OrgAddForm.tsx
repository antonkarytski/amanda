import React from "react";
import cx from "classnames";
import { useForm } from "react-hook-form";
import Repeater from "../../FormsBlocks/Repeater";
import TextField from "@material-ui/core/TextField";
import structure from "../../Structure/Structure.module.scss";
import formClasses from "../Forms.module.scss";
import {
  P_ORG,
  P_ACCOUNT,
  P_CEO,
  P_CONTACT,
} from "../../../settings/dbPrefixes";
import Row from "../../Structure/Row";
import Column from "../../Structure/Column";
import { useApi } from "../../../utils/hooks/hook.fetch";
import { AMANDA_API } from "../../../settings/server";
import CurrencySelect from "../../FormsBlocks/Select/CurrencySelect";
import CountrySelect from "../../FormsBlocks/Select/CountrySelect";
import OrgFormSelect from "../../FormsBlocks/Select/OrgFormSelect";

export default function OrgAddForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { request, response } = useApi(AMANDA_API);

  async function onSubmit(data: any) {
    console.log(JSON.stringify(data));
    const res = await request(P_ORG, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
    console.log(res);
  }

  return (
    <div className={formClasses.CustomerAddForm}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Row>
          <TextField
            fullWidth
            label="Название"
            helperText="Только для внутренней идентификации"
            {...register(P_ORG`internalName`)}
          />
        </Row>
        <Row>
          <OrgFormSelect
            label={"Организация:"}
            name={P_ORG`form`}
            control={control}
            style={{ minWidth: "100px" }}
          />
          <TextField
            fullWidth
            label="Официальное название"
            {...register(P_ORG`officialName`)}
          />
        </Row>
        <Row>
          <TextField fullWidth label={"УНП/ИНН"} {...register(P_ORG`id`)} />
        </Row>
        <Column left>
          <CountrySelect
            label={""}
            name={P_ORG`country`}
            control={control}
            style={{ minWidth: "100px" }}
          />
          <TextField
            label={"Адрес"}
            rows={4}
            multiline
            fullWidth
            {...register(P_ORG`address`)}
          />
        </Column>
        <Column left>
          <div>
            <TextField
              className={formClasses.CeoAttr}
              label={"Должность"}
              {...register(P_CEO`position`)}
            />
            <TextField
              className={cx(structure.LeftMargin, formClasses.CeoAttr)}
              label={"Должность"}
              helperText="В родительном падеже"
              {...register(P_CEO`positionGenitive`)}
            />
          </div>
          <div>
            <TextField
              className={formClasses.CeoAttr}
              label={"ФИО"}
              {...register(P_CEO`name`)}
            />
            <TextField
              className={cx(structure.LeftMargin, formClasses.CeoAttr)}
              label={"ФИО"}
              helperText="В родительном падеже"
              {...register(P_CEO`nameGenitive`)}
            />
          </div>
          <TextField
            fullWidth
            label={"Основание действия"}
            helperText="В родительном падеже"
            {...register(P_CEO`basisOfWork`)}
          />
        </Column>
        <Repeater>
          {() => {
            return (
              <Column left>
                <CurrencySelect
                  withDefault
                  name={P_ACCOUNT`currency`}
                  style={{ minWidth: "250px" }}
                  control={control}
                />
                <TextField
                  label="Реквизиты"
                  multiline
                  fullWidth
                  rows={6}
                  {...register(P_ACCOUNT`details`)}
                />
              </Column>
            );
          }}
        </Repeater>
        <input type={"submit"} />
      </form>
    </div>
  );
}
