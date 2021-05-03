import React, { useState, Children } from "react";
import { _HocProps } from "../_interfaces/_Props";
import {
  Tabs as MaterialTabs,
  Tab,
  TabsProps as MaterialTabsProps,
} from "@material-ui/core";
import { TabPanelType } from "./TabPanel";

export interface TabsProps
  extends Omit<MaterialTabsProps, "children">,
    _HocProps<TabPanelType[]> {
  initialTab?: number;
}

export default function Tabs({
  children = [],
  initialTab = 0,
  ...props
}: TabsProps) {
  const [currentTab, setCurrentTab] = useState(initialTab);

  return (
    <div>
      <MaterialTabs
        value={currentTab}
        onChange={(event, index) => setCurrentTab(index)}
        {...props}
      >
        {children.map((child, index) => {
          return <Tab label={child.props.label} key={`tabHead${index}`} />;
        })}
      </MaterialTabs>
      {Children.map(children, (child, index) => {
        const tabProps = {
          key: `tabHead${index}`,
          isHidden: index !== currentTab,
        };
        return <child.type {...child.props} {...tabProps} />;
      })}
    </div>
  );
}
