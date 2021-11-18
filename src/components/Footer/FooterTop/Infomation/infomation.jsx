import React from "react";
import { NavLink } from "react-router-dom";

function Infomation(props) {
  return (
    <li className="footer__item">
      <h2 className="footer__item__title">Information</h2>
      <ul className="footer__item__list">
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Privacy Page
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            About us
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Careers
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Delivery Inforamtion
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Term & Conditions
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

export default Infomation;
