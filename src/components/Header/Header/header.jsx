import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Images } from "../../../constants/images";
import Navbar from "../Navbar/navbar";
import CartAndUser from "../CartAndUser/Main/cartAndUser";
import "./header.scss";

function Header({ boxCart, setBoxCart }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <div className="container header__list">
        <div className="header__toggle" onClick={() => setShowMenu(!showMenu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </div>
        <NavLink to="/" className="header__logo">
          <img src={Images.Logo} alt="" />
        </NavLink>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
        <CartAndUser boxCart={boxCart} setBoxCart={setBoxCart} />
      </div>
    </header>
  );
}

export default Header;
