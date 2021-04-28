import React, { ReactComponentElement, useState } from "react";
import Button from "../Buttons/Button";
import { _Props } from "../_interfaces/_Props";

export interface RepeaterProps extends _Props {
  children: (index: number) => ReactComponentElement<any>;
  initialFieldsCount?: number;
  disableExtendability?: boolean;
  buttonLabel?: string;
}

export default function Repeater({
  children: childrenFactory,
  initialFieldsCount = 1,
  disableExtendability,
  buttonLabel,
  className,
  style,
  ...props
}: RepeaterProps) {
  const [indexes, setIndexes] = useState(Array(initialFieldsCount).fill(null));

  function addElement() {
    setIndexes((prevIndexes) => [...prevIndexes, null]);
  }

  return (
    <div className={className} {...props}>
      {indexes.map((el, index) => {
        return childrenFactory(index);
      })}
      <Button
        label={buttonLabel ?? "Добавить"}
        onClick={addElement}
        disabled={disableExtendability}
      />
    </div>
  );
}
