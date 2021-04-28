import React from "react";
import cx from "classnames";
import { ButtonProps } from "./_interfaces";
import classes from "./Buttons.module.scss";

export default function Button({ label, className, ...props }: ButtonProps) {
  return (
    <button className={cx(classes.Button, className)} {...props}>
      {label}
    </button>
  );
}
