import React, { useState, useEffect } from "react";
import Product from "./Product";
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { calculateBasketTotal } from "./Reducer";
import axios from './Axios';
import { useHistory } from 'react-router-dom';
import { db } from "./firebase";

function Payment() {

    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    const stripe = useStripe();
    const element = useElements();

    //Learn This
    const [error, setError] = useState(null);
    const [disabled, setDisable] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [clientSecret, setClientSecret] = useState(true);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: element.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // Payment Intent-confirmation
            db.collection('users').
                doc(user?.uid).
                collection('orders').
                doc(paymentIntent.id).
                set({
                    basket: basket,
                    amount: paymentIntent.amount,
                    created: paymentIntent.created
                })



            setSucceeded(true);
            setError(null);
            setProcessing(false);

            dispatch({
                type: "EMPTY_BASKET",
            })
            history.replace("/orders");
        })

    }

    useEffect(() => {

        const getClientSecretId = async () => {
            const response = await axios({
                method: 'POST',
                url: `/payment/create?total=${calculateBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret);
        }

        getClientSecretId();
    }, [basket])

    console.log("THe SECRET IS ============>", clientSecret);

    const handleChange = (e) => {
        setDisable(e.empty);
        setError(e.error ? e.error.message : "")
    }
    return <div className="payment">
        <h3 className="payment__checkouttile">Checkout ({basket.length} items)</h3>
        <div className="payment__container">
            <div className="payment__section">
                <div className="payment__title">
                    <h5>Dilivery Address</h5>
                </div>
                <div className="payment__address">
                    <p>No.126,</p>
                    <p>St. Joseph Mawatha</p>
                    <p>Ettukala</p>
                    <p>Negombo</p>
                </div>
            </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h5>Dilivery Address</h5>
                </div>

                <div className="payment__stripe">
                    {basket?.map((item) => {
                        console.log("basket map", item);
                        return <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating}
                            key={item.id}
                        />
                    })}
                </div>
            </div>

            <div className="payment__section">
                <div className="payment__title">
                    <h5>Payments</h5>
                </div>
                <div className="payment__card">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange} />
                        <div className="payment__pricecontainer">
                            <CurrencyFormat
                                renderText={(val) => {
                                    return <h3>Order total: {val}</h3>
                                }}
                                decimalScale={2}
                                value={calculateBasketTotal(basket)}
                                displayType={"text"}
                                thousandsSeparator={true}
                                prefix={"$"}
                            />
                            <button disabled={processing || succeeded || disabled} className="payment__finalize__button">
                                <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                            </button>
                        </div>

                        {/* Errors */}
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>;
}

export default Payment;
