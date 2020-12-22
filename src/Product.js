import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';

function Product({ title, price, image, rating, id }) {

  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch item to data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id,
        title,
        image,
        price,
        rating
      }
    })
  }

  return (
    <div className="product">
      <div className="product__infor">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((data, i) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <img src={image} alt="s" />
      <Link to="/checkout">
        <button className="product__button" onClick={addToBasket}>Add to bucket</button>
      </Link>
    </div>
  );
}

export default Product;
