import React from "react";
import "./DeleteOrderSuccess.scss";

function DeleteOrderSuccess({ setSuccessMsg }) {
  return (
    <div className="delete-success">
      <div className="delete-success__container">
        <div className="delete-success__info">
          <div className="delete-success__info__heading">
            <h3 className="delete-success__info__heading__title">Commpled</h3>
            <button
              className="delete-success__info__heading__btn"
              onClick={() => setSuccessMsg(false)}
            >
              X
            </button>
          </div>
          <div className="delete-success__info__check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="bi bi-check-circle delete-success__info__icon small"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
          <p className="delete-success__info__message">Succeffully</p>
          <p className="delete-success__info__desc">
            This Order has been removed form the your Orders
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeleteOrderSuccess;
