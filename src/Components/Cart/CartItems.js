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

  const quantityChangehandler = (event)=>{
      const ele = event.target.parentElement.parentElement;
      cartCtx.quantityChange(ele, event.target.value);
  }

  return (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        //   <li>{item.name}</li>
        <li id={item.id} className={classes.meal}>
          <div className={classes.details}>
            <h3>{item.name}</h3>
            <div className={classes.description}>{item.description}</div>
            <div className={classes.price}>₹{item.price.toFixed(2)}</div>
          </div>
          <div className={classes.input}>
            <label>Quantity:</label>
            <input
              type="number"
              min="1"
              max="5"
              defaultValue={item.quantity}
              onChange={quantityChangehandler}
            />
            <button onClick={deleteHandler}>Delete</button>
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
