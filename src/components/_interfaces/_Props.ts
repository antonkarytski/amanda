import { ReactElement } from "react";

export interface _Props {
  className?: string;
  style?: {
    [key: string]: string;
  };
}

export interface _HocProps<
  ChildrenType = ReactElement | ReactElement[] | string
> {
  children?: ChildrenType;
}
