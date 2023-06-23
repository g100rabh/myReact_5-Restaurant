import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import Modal from "./Modal";
import MealItemForm from "../Meals/MealItems/MealItemForm";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const cartItem = (
    <ul className={classes["cart-items"]}>
        
      {cartCtx.items.map((item) => (
        //   <li>{item.name}</li>
        <li className={classes.meal}>
          <div>
            <h3>{item.name}</h3>
            <div className={classes.description}>{item.description}</div>
            <div className={classes.price}>{item.price.toFixed(2)}</div>
          </div>
          <div className={classes.input}>
            <label>Quantity:</label><input type="number" defaultValue={item.quantity} />
          </div>
        </li>
      ))}
    </ul>
  );

  let total = 0;
  cartCtx.items.forEach(element => {
      total += Number(element.price);
  })

  return (
    <Modal onClickBackdrop={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${total}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
