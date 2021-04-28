import { ReactElement } from "react";
import { _Props } from "../_interfaces/_Props";

export interface StructProps extends _Props {
  children: ReactElement | ReactElement[];
  left?: boolean;
}
