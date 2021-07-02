import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const { name, img, seller, price, stock, key } = props.product;
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
                {props.showAddToCart &&
                    <button onClick={() => props.handleAddProduct(props.product)}>Add to Cart</button>
                }
            </div>
        </div>
    );
};

export default Product;