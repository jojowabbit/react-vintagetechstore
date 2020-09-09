import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/user";
import CartLink from "./Cart/CartLink";
import LoginLink from "./LoginLink";
import logo from "../assets/logo.svg";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header className="header">
      <img src={logo} alt="vintagetech logo" className="logo" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
            {user.token && (
              <li>
                <Link to="/checkout">checkout</Link>
              </li>
            )}
          </div>
          <div>
            <LoginLink />
            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
