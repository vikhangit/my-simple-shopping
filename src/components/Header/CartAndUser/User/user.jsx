import React from "react";
import { NavLink } from "react-router-dom";

function User({ user, showDialog, setShowDialog, LogoutAccount }) {
  return (
    <div
      className="header__right__user"
      onMouseEnter={() => setShowDialog(true)}
      onClick={() => setShowDialog(true)}
      onMouseLeave={() => setShowDialog(false)}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="bi bi-person"
        viewBox="0 0 16 16"
      >
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
      </svg>
      {showDialog && (
        <div className="header__box">
          <ul className="header__box__menu">
            <li
              className="header__box__item"
              onClick={() => setShowDialog(false)}
            >
              {!user ? (
                <NavLink to="/sign-in" className="header__box__link">
                  Sign In
                </NavLink>
              ) : (
                <div>
                  <NavLink
                    to="/my-account"
                    className="header__box__link header__box__link--header"
                  >
                    <span style={{ fontWeight: "300" }}>Hello!!!</span>{" "}
                    {user.userName}
                  </NavLink>
                  <div className="header__box__link__line"></div>
                </div>
              )}
            </li>
            <li
              className="header__box__item"
              onClick={() => setShowDialog(false)}
            >
              {!user ? (
                <NavLink to="/register" className="header__box__link">
                  Register
                </NavLink>
              ) : (
                <NavLink to="/my-account" className="header__box__link">
                  My Account
                </NavLink>
              )}
            </li>
            <li className="header__box__item">
              {user && (
                <button
                  className="header__box__link"
                  onClick={() => {
                    setShowDialog(false);
                    LogoutAccount(user);
                  }}
                >
                  Logout
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default User;
