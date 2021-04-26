import React from "react";
import cx from "classnames";
import { useForm } from "react-hook-form";
import currency from "../../../forms/datas/currency.json";
import countries from "../../../forms/datas/countries.json";
import organisationForms from "../../../forms/datas/organisationForms.json";
import { camelCase } from "../../../utils/helpers/strings";
import Repeater from "../../FormsBlocks/Repeater";
import SelectField from "../../FormsBlocks/Select/SelectField";
import TextField from "@material-ui/core/TextField";
import structure from "../../Structure/Structure.module.scss";
import formClasses from "../Forms.module.scss";
import { generalCurrency } from "../../../forms/additionalListValues";
import {
  P_ORG,
  P_ACCOUNT,
  P_CEO,
  P_CONTACT,
} from "../../../settings/dbPrefixes";
import Row from "../../Structure/Row";
import Column from "../../Structure/Column";

type CustomerAddFormInterface = {
  organisationName: string;
  organisationOfficialName: string;
};

const ceoPrefix = camelCase(P_ORG, P_CEO);
const accountPrefix = camelCase(P_ORG, P_ACCOUNT);
const contactPrefix = camelCase(P_ORG, P_CONTACT);

const currencyOptions = currency.map(({ nameRus, code }) => ({
  value: code,
  label: nameRus,
}));
currencyOptions.push(generalCurrency);

const countriesOptions = countries.map(({ nameRus, code }) => ({
  value: code,
  label: nameRus,
}));

export default function CustomerAddForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data: CustomerAddFormInterface) {
    console.log(data);
  }

  return (
    <div className={formClasses.CustomerAddForm}>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Row>
          <TextField
            fullWidth
            label="Название"
            helperText="Только для внутренней идентификации"
            {...register(camelCase(P_ORG, "pseudoName"))}
          />
        </Row>
        <Row>
          <SelectField
            style={{ minWidth: "100px" }}
            label={"Организация:"}
            options={organisationForms}
            register={register(camelCase(P_ORG, "form"), { required: true })}
          />
          <TextField
            fullWidth
            label="Официальное название"
            {...register(camelCase(P_ORG, "officialName"), {
              required: true,
            })}
          />
        </Row>
        <Row>
          <TextField
            fullWidth
            label={"УНП/ИНН"}
            {...register(camelCase(P_ORG, "id"))}
          />
        </Row>
        <Column left>
          <SelectField
            style={{ minWidth: "100px" }}
            options={countriesOptions}
            register={register(camelCase(P_ORG, "country"), {
              required: true,
            })}
          />
          <TextField
            label={"Адрес"}
            rows={4}
            multiline
            fullWidth
            {...register(camelCase(P_ORG, "address"))}
          />
        </Column>
        <Column left>
          <div>
            <TextField
              className={formClasses.CeoAttr}
              label={"Должность"}
              {...register(camelCase(ceoPrefix, "position"))}
            />
            <TextField
              className={cx(structure.LeftMargin, formClasses.CeoAttr)}
              label={"Должность"}
              helperText="В родительном падеже"
              {...register(camelCase(ceoPrefix, "positionGenitive"))}
            />
          </div>
          <div>
            <TextField
              className={formClasses.CeoAttr}
              label={"ФИО"}
              {...register(camelCase(ceoPrefix, "name"))}
            />
            <TextField
              className={cx(structure.LeftMargin, formClasses.CeoAttr)}
              label={"ФИО"}
              helperText="В родительном падеже"
              {...register(camelCase(ceoPrefix, "nameGenitive"))}
            />
          </div>
          <TextField
            fullWidth
            label={"Основание действия"}
            {...register(camelCase(ceoPrefix, "basisOfWork"))}
            helperText="В родительном падеже"
          />
        </Column>
        <Repeater>
          {() => {
            return (
              <Column left>
                <SelectField
                  style={{ minWidth: "250px" }}
                  label={"Валюта"}
                  options={currencyOptions}
                  register={register(camelCase(accountPrefix, "currency"))}
                />
                <TextField
                  label="Реквизиты"
                  multiline
                  fullWidth
                  rows={6}
                  {...register(camelCase(accountPrefix, "details"))}
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
