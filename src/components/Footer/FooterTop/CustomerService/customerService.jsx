import React from "react";
import { NavLink } from "react-router-dom";

function CustomerService(props) {
  return (
    <li className="footer__item">
      <h2 className="footer__item__title">CUSTOMER SERVICE</h2>
      <ul className="footer__item__list">
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Shipping Policy
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Help & Contact Us
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Returns & Refunds
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Online Store
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Terms & Conditions
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

export default CustomerService;
