import { _Props } from "./_Props";

export interface InputProps extends _Props {
  register: any;
  label?: string;
  props?: unknown;
}

export interface SelectProps extends InputProps {
  options: {
    value: string;
    label: string;
  }[];
}
