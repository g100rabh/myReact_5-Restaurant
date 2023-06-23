import React, { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = props => {
    const [items, updateItems] = useState([]);

    const addItemHandler = (item) => {
        console.log(item)
        // let existing;
        // if(items.length!==0){
        //     items.forEach(i => {
        //         if(i.id === item.id){
        //             // updateItems(`${Number(i.quantity)+Number(item.quantity)}`)
        //             const newQuantity = Number(i.quantity)+Number(item.quantity)
        //             const itemAvailable = items.filter((element) => element.id !== item.id)
        //             // console.log(itemAvailable)
        //             item.quantity = `${newQuantity}`
        //             // console.log(item)
        //             existing = itemAvailable
        //         }
        //     })
        // } 
        // if(existing){
        //     updateItems([ item,...existing])
        // } else {
        //     updateItems([...items, item])
        // }

        const itemIndex = items.findIndex(i => i.id === item.id)
        console.log(itemIndex);
        const copy = [...items]
        if(itemIndex !== -1){
            copy[itemIndex].quantity = copy[itemIndex].quantity + item.quantity;
            updateItems(copy)
        } else {
            updateItems([...items, item])
        }
        
    };

    const removeItemHandler = (id) => {
        const itemLeft = items.filter((element) => element.id !== id)
        updateItems(itemLeft);
    };

    const newQuantityHandler = (ele, newQua) => {
        const itemIndex = items.findIndex(i => i.id === ele.id)
        let copy = [...items];
        copy[itemIndex].quantity = copy[itemIndex].quantity + (newQua);
        if(copy[itemIndex].quantity == 0){
            copy = copy.filter((element) => element.id !== ele.id)
        }
        updateItems(copy)
    }

    const cartContext = {
        items: items,
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        quantityChange: newQuantityHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;