import React, { useEffect } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
const Suggestions = require("suggestions");

function Header() {
  const [{ basket, user, items }, dispatch] = useStateValue();
  console.log("USe state", useStateValue());
  const handleSignIn = () => {
    if (user) {
      auth.signOut();
    }
  };

  const inputSugestion = () => {
    console.log("use efect");
    const typehead = new Suggestions(
      document.querySelector("#header__searchInp"),
      items,
      {
        minLength: 2,
        limit: 4,
      }
    );
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG25.png"
        />
      </Link>
      {/* search */}
      <div className="header__search">
        <input
          type="text"
          className="header__searchInp"
          onChange={(e) => {
            dispatch({
              type: "SEARCH",
              searchItem: [e.target.value],
            });
          }}
        />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* navbar */}
      <div className="header__nav">
        <Link to={!user && "/signin"}>
          <div className="header__option" onClick={handleSignIn}>
            <span className="header__optionLineOne">Hello {user?.email}</span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sing In"}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your,</span>
          <Link to="/orders">
            <span className="header__optionLineTwo">Orders</span>
          </Link>
        </div>
        <div className="header__optionBasket">
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket.length}
          </span>
        </div>
      </div>
    </div>
  );
}
export default Header;
