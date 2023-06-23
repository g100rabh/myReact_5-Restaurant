import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {

  const cartCtx = useContext(CartContext);


  const addItemToCart = (event) => {
    event.preventDefault();
    // cartCtx.items.push(props.item)
    // console.log(cartCtx);
    const quantity = document.getElementById("amount_" + props.id).value
    cartCtx.addItem({...props.item, quantity: quantity});
    // console.log("a", cartCtx);
  };

  return (
    <form className={classes.form}>
      {console.log("inside", cartCtx)}
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button onClick={addItemToCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
