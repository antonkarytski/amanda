import React from "react";
import CustomerAddForm from "./components/Forms/CustomerAddForm/CustomerAddForm";
import classes from "./styles/App.module.scss";
import "./styles/default-styles.scss";

function App() {
  return (
    <div className={classes.App}>
      <CustomerAddForm />
    </div>
  );
}

export default App;
