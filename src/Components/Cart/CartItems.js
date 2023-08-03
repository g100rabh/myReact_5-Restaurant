import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./CartItems.module.css";

const CartItems = () => {
  const cartCtx = useContext(CartContext);

  const deleteHandler = (event) => {
    const ele = event.target.parentElement.parentElement;
    // console.log(ele.id)
    cartCtx.removeItem(ele.id);
  };

  const increaseHandler = (event) => {
      const ele = event.target.parentElement.parentElement;
      cartCtx.quantityChange(ele, +1);
  }
  const reduceHandler = (event) => {
    const ele = event.target.parentElement.parentElement;
    cartCtx.quantityChange(ele, -1);
}

  return (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        //   <li>{item.name}</li>
        <li id={item.id} className={classes.meal}>
          <div className={classes.details}>
            <h3>{item.name}</h3>
            <div className={classes.price}>₹{item.price.toFixed(2)}</div>
            <div className={classes.quantity}>x{item.quantity}</div>
          </div>

          <div className={classes.input}>
            {/* <label>Quantity:</label> */}
            {/* <input
              type="number"
              min="1"
              max="5"
              defaultValue={item.quantity}
              onChange={quantityChangehandler}
            /> */}
            <button className={classes.reduce} onClick={reduceHandler}>-</button>
            <button className={classes.increase} onClick={increaseHandler}>+</button>
            <button className={classes.delete} onClick={deleteHandler}>X</button>
          </div>
          <div className={classes.totalPrice}>
            <span className={classes.ta}>Total amount: </span>
            <span className={classes.tp}>₹{(Number(item.price) * Number(item.quantity)).toFixed(2)}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
