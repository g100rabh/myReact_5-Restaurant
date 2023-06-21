import React from "react";

import classes from "./SummaryModal.module.css";

const SummaryModal = () => {
  return (
    <div className={classes.modal}>
        <header className={classes.header}>
            <h2>Delicous Food, Delivered To You</h2>
        </header>
      
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default SummaryModal;
