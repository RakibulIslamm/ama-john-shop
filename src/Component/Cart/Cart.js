import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let totalQuantity = 0;
    for (const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Order Item: {totalQuantity}</h4>
            <p>Total: {parseFloat(total).toFixed(2)}</p>
        </div>
    );
};

export default Cart;