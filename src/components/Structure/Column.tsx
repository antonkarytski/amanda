import React from "react";
import cx from "classnames";
import { StructProps } from "../_interfaces/Struct";
import classes from "./Structure.module.scss";

export default function Column({
  children,
  className,
  left: isLeft,
}: StructProps) {
  return (
    <div className={cx(classes.Column, { [classes.Left]: isLeft }, className)}>
      {children}
    </div>
  );
}
