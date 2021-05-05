import React from "react";
import cx from "classnames";
import { useForm } from "react-hook-form";
import Repeater from "../../FormsBlocks/Repeater";
import TextField from "@material-ui/core/TextField";
import structure from "../../Structure/Structure.module.scss";
import formClasses from "../Forms.module.scss";
import { P_ORG, P_ACCOUNTS, P_CEOS } from "../../../settings/dbPrefixes";
import Row from "../../Structure/Row";
import Column from "../../Structure/Column";
import { useApi } from "../../../utils/hooks/hook.fetch";
import { AMANDA_API } from "../../../settings/server";
import CurrencySelect from "../../FormsBlocks/Select/CurrencySelect";
import CountrySelect from "../../FormsBlocks/Select/CountrySelect";
import OrgFormSelect from "../../FormsBlocks/Select/OrgFormSelect";
import Tabs from "../../Tabs/Tabs";
import TabPanel from "../../Tabs/TabPanel";
import ContactModule from "../../FormsModules/ContactModule";
//import AccountModule from "../../FormsModules/AccountModule";

export default function OrgAddForm() {
  const {
    register,
    handleSubmit,
    control,
    //formState: { errors },
  } = useForm();
  const { request, response } = useApi(AMANDA_API);

  async function submitHandler(data: any) {
    await request(P_ORG, {
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
        <Tabs>
          <TabPanel label={"Данные организации"}>
            <Row>
              <TextField
                fullWidth
                label="Название"
                helperText="Только для внутренней идентификации"
                {...register("internalName")}
              />
            </Row>
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
            <Row>
              <TextField fullWidth label={"УНП/ИНН"} {...register("orgId")} />
            </Row>
            <Column left>
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
          </TabPanel>
          <TabPanel label={"Руководитель"}>
            <Column left>
              <div>
                <TextField
                  className={formClasses.CeoAttr}
                  label={"Должность"}
                  {...register(P_CEOS`[0].position`)}
                />
                <TextField
                  className={cx(structure.LeftMargin, formClasses.CeoAttr)}
                  label={"Должность"}
                  helperText="В родительном падеже"
                  {...register(P_CEOS`[0].positionGenitive`)}
                />
              </div>
              <div>
                <TextField
                  className={formClasses.CeoAttr}
                  label={"ФИО"}
                  {...register(P_CEOS`[0].name`)}
                />
                <TextField
                  className={cx(structure.LeftMargin, formClasses.CeoAttr)}
                  label={"ФИО"}
                  helperText="В родительном падеже"
                  {...register(P_CEOS`[0].nameGenitive`)}
                />
              </div>
              <TextField
                fullWidth
                label={"Основание действия"}
                helperText="В родительном падеже"
                {...register(P_CEOS`[0].basisOfWork`)}
              />
            </Column>
          </TabPanel>
          <TabPanel label={"Счета"}>
            <Repeater>
              {(index) => {
                return (
                  <Column key={`accountBlock${index}`} left>
                    <CurrencySelect
                      withDefault
                      name={P_ACCOUNTS`[${index}].currency`}
                      style={{ minWidth: "250px" }}
                      control={control}
                    />
                    <TextField
                      label="Реквизиты"
                      multiline
                      fullWidth
                      rows={6}
                      {...register(P_ACCOUNTS`[${index}].details`)}
                    />
                  </Column>
                );
              }}
            </Repeater>
          </TabPanel>
          <TabPanel label={"Контакты"}>
            <Repeater>
              {(index) => <ContactModule register={register} index={index} />}
            </Repeater>
          </TabPanel>
        </Tabs>
        <input type={"submit"} />
      </form>
    </div>
  );
}
