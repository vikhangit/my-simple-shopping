import React, { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import RegisterForm from "../../Components/Register/RegisterForm/registerForm";
import RegisterHeader from "../../Components/Register/RegisterHeader/registerHeader";

function Register() {
  const user = JSON.parse(localStorage.getItem("user-login"));
  const history = useHistory();
  useEffect(() => {
    if (user) {
      history.push("/my-account");
    }
  }, [history, user]);
  return (
    <section className="register">
      <div className="page">
        <h2 className="page__title">Account</h2>
        <div className="page__breadcrumb">
          <NavLink to="/" className="page__breadcrumb__link">
            Home
          </NavLink>
          <p>Register</p>
        </div>
      </div>
      <div className="container">
        <RegisterHeader />
        <RegisterForm />
      </div>
    </section>
  );
}

export default Register;
