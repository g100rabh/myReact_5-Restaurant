import React from "react";
import classes from "./MealForm.module.css";

const MealForm = () => {
  return (
    <from>
      <div className={classes.form}>
        <label>Amount</label>
        <input type="text" />
      </div>

      <div>
        <button className={classes.button}>+Add</button>
      </div>
    </from>
  );
};

export default MealForm;
