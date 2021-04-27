import { _Props } from "./_Props";

export interface InputProps extends _Props {
  register: any;
  label?: string;
}

export interface SelectProps extends InputProps {
  options: {
    value: string;
    label: string;
  }[];
}

export interface ControlledSelectProps extends Omit<SelectProps, "register"> {
  name: string;
  control: any;
}

export interface SpecifiedSelectProps
  extends Omit<ControlledSelectProps, "options"> {
  withDefault?: boolean;
}
