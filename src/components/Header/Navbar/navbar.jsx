import React from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

function Navbar({ showMenu, setShowMenu }) {
  const clickToLink = () => {
    setShowMenu(false);
  };
  return (
    <nav className="header__navbar">
      <ul className={showMenu ? "header__menu header__show" : "header__menu"}>
        <li className="header__item">
          <NavLink onClick={clickToLink} to="/" className="header__link">
            Home
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink onClick={clickToLink} to="/shop" className="header__link">
            Shop
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink onClick={clickToLink} to="/news" className="header__link">
            News
          </NavLink>
        </li>
        <li onClick={clickToLink} className="header__item">
          <NavLink to="/contact" className="header__link">
            Contact
          </NavLink>
        </li>
        <li onClick={clickToLink} className="header__item">
          <NavLink to="/about-us" className="header__link">
            About us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
