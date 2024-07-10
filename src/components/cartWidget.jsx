import React from 'react';
import './cartWidget.css';
const CartWidget = () => {
    return (
        <div className="cartWidget">
            <span role="img" aria-label="cart">🛒</span>
            <span>0</span>
        </div>
    );
}

export default CartWidget;
