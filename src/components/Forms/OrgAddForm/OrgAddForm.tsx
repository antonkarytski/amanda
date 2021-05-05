import React from "react";
import cx from "classnames";
import { useForm } from "react-hook-form";
import Repeater from "../../FormsBlocks/Repeater";
import TextField from "@material-ui/core/TextField";
import formClasses from "../Forms.module.scss";
import { P_ORG } from "../../../settings/dbPrefixes";
import Row from "../../Structure/Row";
import { useApi } from "../../../utils/hooks/hook.fetch";
import { AMANDA_API } from "../../../settings/server";
import Tabs from "../../Tabs/Tabs";
import TabPanel from "../../Tabs/TabPanel";
import ContactModule from "../../FormsModules/ContactModule";
import AccountModule from "../../FormsModules/AccountModule";
import CeoNameModule from "../../FormsModules/CeoNameModule";
import OrgNameField from "../../FormsBlocks/OrgNameField";
import { OrgAddressModule } from "../../FormsModules/OrgAddressModule";

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
            <OrgNameField register={register} control={control} />
            <Row>
              <TextField fullWidth label={"УНП/ИНН"} {...register("orgId")} />
            </Row>
            <OrgAddressModule register={register} control={control} left />
          </TabPanel>
          <TabPanel label={"Руководитель"}>
            <CeoNameModule register={register} column left />
          </TabPanel>
          <TabPanel label={"Счета"}>
            <Repeater>
              {(index) => (
                <AccountModule
                  register={register}
                  index={index}
                  control={control}
                  column
                  left
                />
              )}
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
