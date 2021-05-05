import { StructProps } from "../Structure/_interfaces";
import { Control, UseFormRegister } from "react-hook-form/dist/types/form";

export interface FormModuleProps extends Omit<StructProps, "children"> {
  register: UseFormRegister<any>;
  column?: boolean;
  index?: number;
}

export interface ControlledFormModuleProps extends FormModuleProps {
  control: Control;
}

export interface UnrepeatableFormModuleProps
  extends Omit<FormModuleProps, "index"> {}
