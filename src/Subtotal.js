import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { calculateBasketTotal } from "./Reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();

  const [{ basket }, dispatch] = useStateValue();
  const cal = () => {
    let total = 0;
    basket.map((val) => {
      total += val.price;
    });
    return total;
  };

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
        onClick={(e) => history.push("/payment")}
      >
        Proceed to checkout
      </button>
    </div>
  );
}
export default Subtotal;
