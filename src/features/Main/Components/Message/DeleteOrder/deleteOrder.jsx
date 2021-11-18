import React from "react";
import "./deleteOrder.scss";

function DeleteOrder({ info, loadingAccept, onAcceptDelete, setShowMessage }) {
  return (
    <div className="delete-order">
      <div className="delete-order__container">
        <div className="delete-order__info">
          <div className="delete-order__info__heading">
            <h3 className="delete-order__info__heading__title">Message</h3>
            {loadingAccept ? (
              <button className="delete-order__info__heading__btn" disabled>
                X
              </button>
            ) : (
              <button
                className="delete-order__info__heading__btn"
                onClick={() => setShowMessage(false)}
              >
                X
              </button>
            )}
          </div>
          <p className="delete-order__info__message">Remove Order</p>
          <p className="delete-order__info__desc">
            Are you sure to remove this order
          </p>
          <div className="delete-order__info__btn">
            <button
              className="delete-order__info__btn__accept"
              onClick={() => onAcceptDelete(info)}
            >
              {loadingAccept ? (
                <div>
                  <div className="delete-order__info__btn__accept__loading"></div>{" "}
                  Loading...
                </div>
              ) : (
                "Accept"
              )}
            </button>
            {loadingAccept ? (
              <button className="delete-order__info__btn__cancle__disable">
                Cancle
              </button>
            ) : (
              <button
                className="delete-order__info__btn__cancle"
                onClick={() => setShowMessage(false)}
              >
                Cancle
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteOrder;
