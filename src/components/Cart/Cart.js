import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity ,0)

    let shipping = 0;
    if (totalPrice > 35) {
        shipping = 0;    
    }
    else if (totalPrice > 15) {
        shipping = 4.99;
    }
    else if (totalPrice > 0) {
        shipping = 12.45        
    }

    const tax = totalPrice / 10;

    const formatNumber = (num) => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div className="cart-summery">
            <h1>Order Summary</h1>
            <br />
            <h3>Items Ordered: {cart.length} </h3>
            <br />
            <p>Shipping Cost: $ {shipping}</p>
            <br />
            <p>Vat + Tax: $ {formatNumber(tax)}</p>
            <br />
            <h4>Total Price: $ {formatNumber(totalPrice + shipping + tax)}</h4>
            <br />
             {
                props.children
             }
        </div>
    );
};

export default Cart;