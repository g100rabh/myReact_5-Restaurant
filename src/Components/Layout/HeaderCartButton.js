import React, { useContext } from "react";
import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";


const HeaderCartButton = (props) => {

  const cartCtx=useContext(CartContext);

  // const numberCartItem = cartCtx.items.reduce((currNumber, item)=>{
  //   return currNumber + item.amount
  // },0)
  let quantity = 0;
  cartCtx.items.forEach(element => {
    quantity += Number(element.quantity)
    
  });

  return (
    <button onClick={props.onClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default HeaderCartButton;
