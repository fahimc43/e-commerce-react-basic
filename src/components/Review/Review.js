import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
// import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);
    const removeProduct = (productKey) => {
        // console.log('remove', productKey);
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        })
        setCart(cartProducts);
    }, []);

    // const [placedOrder, setPlacedOrder ] = useState(false)
    let history = useHistory();
    const handleProceedCheckOut = () => {
        history.push("/shipment")

        // setCart([])
        // setPlacedOrder(true)
        // processOrder()
    }

    // let thankYou;
    // if (placedOrder) {
    //     thankYou = <img src={happyImage} alt="" />
    // }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(pd => <ReviewItem
                        removeProduct={removeProduct}
                        key={pd.key}
                        product={pd}
                    ></ReviewItem>)
                }
                {/* {thankYou} */}
            </div>
            <div className="cart-container">
                <Cart cart={cart}><button onClick={handleProceedCheckOut} className="review-button">Checkout</button></Cart>
            </div>
        </div>

    );
};

export default Review;