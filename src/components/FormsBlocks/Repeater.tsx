import React, { Children, ReactComponentElement, useState } from "react";

export interface RepeaterProps {
  children: () => ReactComponentElement<any>;
}

export default function Repeater({ children: childrenFactory }: RepeaterProps) {
  const [components, setComponents] = useState([childrenFactory()]);

  return (
    <div>
      {Children.map(components, (child, index) => {
        return <child.type key={index} {...child.props} />;
      })}
    </div>
  );
}
