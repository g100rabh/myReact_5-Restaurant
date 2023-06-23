import React, { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = props => {
    const [items, updateItems] = useState([]);

    const addItemHandler = (item) => {
        console.log(item)
        let existing;
        if(items.length!==0){
            items.forEach(i => {
                if(i.id === item.id){
                    // updateItems(`${Number(i.quantity)+Number(item.quantity)}`)
                    const newQuantity = Number(i.quantity)+Number(item.quantity)
                    const itemAvailable = items.filter((element) => element.id !== item.id)
                    console.log(itemAvailable)
                    item.quantity = `${newQuantity}`
                    console.log(item)
                    existing = itemAvailable
                    
                }
            })
        } 
        if(existing){
            updateItems([ item,...existing])
        } else {
            updateItems([...items, item])
        }
        // const itemAvailable = items.filter((element) => element.id == item.id);
        
        // if(itemAvailable.length == 1){
        //     updateItems(`${Number(itemAvailable.quantity)+Number(item.quantity)}`)
        // } else {
        //     updateItems([...items, item])
        // }
        // console.log('a additem',cartContext)
    };

    const removeItemHandler = () => {};

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;