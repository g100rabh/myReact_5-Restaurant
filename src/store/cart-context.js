import React from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
    quantityChange: (ele, newQua) => {},
});

export default CartContext;