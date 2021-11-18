import React from "react";
import { NavLink } from "react-router-dom";
import "./processCheckOut.scss";

function ProcessCheckOut({ setShowMessage }) {
  return (
    <div className="check-out">
      <div className="check-out__container">
        <div className="check-out__info">
          <div className="check-out__info__heading">
            <h3 className="check-out__info__heading__title">Commpled</h3>
            <button
              className="check-out__info__heading__btn"
              onClick={() => setShowMessage(false)}
            >
              X
            </button>
          </div>
          <div className="check-out__info__check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="bi bi-check-circle check-out__info__icon small"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
          <p className="check-out__info__message">Succeffully</p>
          <p className="check-out__info__desc">
            You checked out success you can view detail by click on button view
            order
          </p>
          <div className="check-out__info__btn">
            <NavLink to="/my-account" className="check-out__info__btn__view">
              View Order
            </NavLink>
            <button
              onClick={() => setShowMessage(false)}
              className="check-out__info__btn__cancle"
            >
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProcessCheckOut;
