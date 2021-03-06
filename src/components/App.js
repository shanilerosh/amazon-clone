import { Route, BrowserRouter, Switch } from "react-router-dom";
import "./styling/App.css";
import { useEffect } from "react";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Element, Elements } from "@stripe/react-stripe-js";
import Header from './Header';
import Orders from './Orders';
import Login from './Login';
import Checkout from './Checkout';
import Payment from './Payment';
import Home from './Home';

const promise = loadStripe(
  "pk_test_51I1BzlGYY0C0LQmMdezwE2chYmZFipEWyjCQjJXhD3LQDaGxmFwKCYCqQTDS6m2Kfi2PGnoQBVEke1k4fRhlaxgc00FEQT2X0i"
);

function App() {
  const [{}, dispatch] = useStateValue();
  const [{ basket, user }, dis] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((auth) => {
      console.log("USER =======>", auth);
      if (auth) {
        dispatch({
          type: "USER_SIGN",
          user: auth,
        });
      } else {
        dispatch({
          type: "USER_SIGN",
          user: null,
        });
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/signin">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
