import React from "react";
import { NavLink } from "react-router-dom";

function MyAccount() {
  return (
    <li className="footer__item">
      <h2 className="footer__item__title">My Account</h2>
      <ul className="footer__item__list">
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            My Account
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Checkout
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Contact Us
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Shopping Cart
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Wishlist
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

export default MyAccount;
