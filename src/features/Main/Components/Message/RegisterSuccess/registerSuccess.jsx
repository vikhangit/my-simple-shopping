import React from "react";
import { useHistory } from "react-router";
import "./registerSuccess.scss";

function RegisterSuccess({ setShowMessage }) {
  const history = useHistory();
  return (
    <div className="register-msg">
      <div className="register-msg__container">
        <div className="register-msg__info">
          <div className="register-msg__info__heading">
            <h3 className="register-msg__info__heading__title">Successfully</h3>
            <button
              className="register-msg__info__heading__btn"
              onClick={() => setShowMessage(false)}
            >
              X
            </button>
          </div>
          <div className="register-msg__info__check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="bi bi-check-circle register-msg__info__icon small"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
          <p className="register-msg__info__message">Congratulations</p>
          <p className="register-msg__info__desc">
            <span>
              Congratulations on becoming a user of the site. Now you can login
              your account to use our services
            </span>
          </p>
          <div className="register-msg__info__btn">
            <button
              className="register-msg__info__btn__view"
              onClick={() => history.push("/sign-in")}
            >
              Sign In
            </button>
            <button
              className="register-msg__info__btn__cancle"
              onClick={() => setShowMessage(false)}
            >
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterSuccess;
