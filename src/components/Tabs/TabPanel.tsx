import React from "react";
import { _HocProps } from "../_interfaces/_Props";
import { ReactElement } from "react";

export interface TabPanelProps extends _HocProps {
  isHidden?: boolean;
  label: string;
}

export type TabPanelType = ReactElement<TabPanelProps>;

export default function TabPanel({
  children,
  isHidden,
  label,
  ...props
}: TabPanelProps): ReactElement {
  return (
    <div role={"tabpanel"} hidden={isHidden} {...props}>
      {!isHidden ? children : null}
    </div>
  );
}
