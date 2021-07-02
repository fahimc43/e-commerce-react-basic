import React from 'react';
import { Link } from 'react-router-dom';

const ReviewItem = (props) => {
    const { name, img, seller, price, stock, key, quantity } = props.product;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-name">

                <Link className="product-title" to={"/product/" + key}><h3 >{name}</h3></Link>
                <br />
                <p><small>by: {seller}</small></p>
                <br />
                <p>${price}</p>
                <br />
                <p><small>Only {stock} left in stock - Order soon</small></p>
                <br />
                <p>Quantity: {quantity}</p>
                <br />
                <button onClick={() => props.removeProduct(key)} className="review-button">Remove Item</button>
            </div>
        </div>
    );
};

export default ReviewItem;