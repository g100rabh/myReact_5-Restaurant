import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import CartItems from "./CartItems";
import Modal from "./Modal";


const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const [isValid, setIsValid ] = useState()

  console.log(cartCtx.items.length)
  
  useEffect(()=> {
      if(cartCtx.items.length>0){
          setIsValid(true)
      } else if(cartCtx.items.length==0){
          setIsValid(false)
      }
  }, [cartCtx.items.length])

  let total = 0;
  cartCtx.items.forEach((element) => {
    total += Number(element.price) * Number(element.quantity);
  });

  return (
    <Modal onClickBackdrop={props.onClose}>
      <CartItems />
      {!isValid && <div className={classes.empty}><span>Your Cart is Empty!</span></div>}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>₹{total.toFixed(2)}</span>
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
