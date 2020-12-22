import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleSignIn = () => {
    if (user) {
      auth.signOut();
    }
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
        <input type="text" className="header__searchInp" />
        {/* search Icon */}
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
          <span className="header__optionLineOne">Hello User</span>
          <Link to="/signin">
            <span className="header__optionLineTwo">Sign In</span>
          </Link>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Hello User</span>
          <span className="header__optionLineTwo">Sign In</span>
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
