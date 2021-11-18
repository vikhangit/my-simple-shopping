import React, { useEffect } from "react";
import "./signIn.scss";
import { NavLink, useHistory } from "react-router-dom";
import SignInCreate from "../SignInCreate/signInCreate";
import SignInDesc from "../SignInDesc/signInDesc";
import SignInForm from "../SignInFrom/signInForm";

function SignInMain() {
  const user = JSON.parse(localStorage.getItem("user-login"));
  const history = useHistory();
  useEffect(() => {
    if (user) {
      history.push("/my-account");
    } else {
      window.scrollTo(0, 0);
    }
  }, [history, user]);
  return (
    <section className="sign-in">
      <div className="page">
        <h2 className="page__title">Account</h2>
        <div className="page__breadcrumb">
          <NavLink to="/" className="page__breadcrumb__link">
            Home
          </NavLink>
          <p>Sign In</p>
        </div>
      </div>
      <div className="container">
        <div className="sign-in_info">
          <SignInDesc />
          <div className="sign-in__content">
            <SignInForm />
            <SignInCreate />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignInMain;
