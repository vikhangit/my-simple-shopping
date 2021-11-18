import React from "react";
import { NavLink } from "react-router-dom";
import "./signInCreate.scss";

function SignInCreate() {
  return (
    <div className="sign-in__create">
      <h2 className="sign-in__create__title">DON'T HAVE AN ACCOUNT?</h2>
      <p className="sign-in__create__desc">
        Add items to your wishlistget personalised recommendations check out
        more quickly track your orders register
      </p>
      <NavLink to="/register" className="sign-in__create__btn">
        Create Account
      </NavLink>
    </div>
  );
}

export default SignInCreate;
