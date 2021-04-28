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

  async function submitHandler(data: any) {
    const res = await request(P_ORG, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <div className={formClasses.CustomerAddForm}>
      <form onSubmit={handleSubmit(submitHandler)} autoComplete="off">
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
          <TextField fullWidth label={"УНП/ИНН"} {...register(P_ORG`orgId`)} />
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
              {...register(P_CEO`position[0]`)}
            />
            <TextField
              className={cx(structure.LeftMargin, formClasses.CeoAttr)}
              label={"Должность"}
              helperText="В родительном падеже"
              {...register(P_CEO`positionGenitive[0]`)}
            />
          </div>
          <div>
            <TextField
              className={formClasses.CeoAttr}
              label={"ФИО"}
              {...register(P_CEO`name[0]`)}
            />
            <TextField
              className={cx(structure.LeftMargin, formClasses.CeoAttr)}
              label={"ФИО"}
              helperText="В родительном падеже"
              {...register(P_CEO`nameGenitive[0]`)}
            />
          </div>
          <TextField
            fullWidth
            label={"Основание действия"}
            helperText="В родительном падеже"
            {...register(P_CEO`basisOfWork[0]`)}
          />
        </Column>
        <Repeater>
          {(index) => {
            return (
              <Column key={`accountBlock${index}`} left>
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
        <br />

        <button onClick={() => console.log(123213)}>Go</button>
        <input type={"submit"} />
      </form>
    </div>
  );
}
