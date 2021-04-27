import React from "react";
import OrgAddForm from "./components/Forms/OrgAddForm/OrgAddForm";
import classes from "./styles/App.module.scss";
import "./styles/default-styles.scss";

export default function App() {
  return (
    <div className={classes.App}>
      <OrgAddForm />
    </div>
  );
}
