import React from "react";
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, price, image, rating }) {
    const [{ basket }, setBasket] = useStateValue()

    const removeitem = () => {
        setBasket({
            type: "REMOVE_FROM_BASKET",
            id
        })
    }

    return (
        <div className="checkoutProduct">
            <img src={image} className="checkoutProduct__image" />
            <div className="checkoutProduct__description">
                <strong>{title}</strong>
                <p>$ {price}</p>
                <div className="checkoutProduct__rating">
                    {new Array(rating).fill().map(() => {
                        return <p>⭐</p>
                    })}
                </div>
                <button className="checkoutProduct__button" onClick={removeitem}>Remove From Bucket</button>
            </div>
        </div>
    );
}

export default CheckoutProduct;
