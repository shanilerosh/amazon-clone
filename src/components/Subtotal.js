import React from "react";
import "./styling/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { calculateBasketTotal } from "../Reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();

  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({basket.length}) :<strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This Orer contains gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={calculateBasketTotal(basket)}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"$"}
      />
      <button
        className="subtotal__button"
        onClick={(e) =>
          user ? history.push("/payment") : history.replace("/signin")
        }
      >
        Proceed to checkout
      </button>
    </div>
  );
}
export default Subtotal;
