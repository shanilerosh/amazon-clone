import React, { forwardRef } from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import FlipMove from "react-flip-move";

const Checkout = () => {
  const [{ basket, user }, setBasket] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Bjn4XI3hwinHRsyyvtcmiQHaCn%26pid%3DApi&f=1"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h5>Hello, {user?.email}</h5>
          <h2 className="checkout__title">Your shopping basked</h2>
        </div>
        <br />
        <FlipMove>
          {basket.map((item) => {
            return (
              <CheckoutProduct
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
                id={item.id}
                key={item.id}
              />
            );
          })}
        </FlipMove>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
