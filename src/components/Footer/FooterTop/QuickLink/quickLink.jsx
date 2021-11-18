import React from "react";
import { NavLink } from "react-router-dom";

function QuickLink(props) {
  return (
    <li className="footer__item">
      <h2 className="footer__item__title">Quick Link</h2>
      <ul className="footer__item__list">
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Store Location
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Orders Tracking
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            Size Guide
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            My Account
          </NavLink>
        </li>
        <li className="footer__item__list__item">
          <NavLink to="/" className="footer__item__list__link">
            FAQs
          </NavLink>
        </li>
      </ul>
    </li>
  );
}

export default QuickLink;
