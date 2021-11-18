import React from "react";
import { NavLink } from "react-router-dom";
import "./deleteProductMSG.scss";

function DeleteProductMSG({
  info,
  setShowMessage,
  AcceptRemove,
  loadingAccept,
}) {
  return (
    <div className="delete-msg">
      <div className="delete-msg__container">
        <div className="delete-msg__info">
          <div className="delete-msg__info__heading">
            <h3 className="delete-msg__info__heading__title">Message</h3>
            {loadingAccept ? (
              <button className="delete-msg__info__heading__btn" disabled>
                X
              </button>
            ) : (
              <button
                className="delete-msg__info__heading__btn"
                onClick={() => setShowMessage(false)}
              >
                X
              </button>
            )}
          </div>
          <p className="delete-msg__info__message">Remove Product</p>
          <p className="delete-msg__info__desc">
            Are you sure to remove these {info.quantities} products from your
            cart?
          </p>
          <div className="delete-msg__info__product">
            <NavLink
              to={`/product-detail/${info.id}`}
              className="delete-msg__info__product__image"
            >
              <img src={info.image} alt={info.image} />
            </NavLink>
            <NavLink
              to={`/product-detail/${info.id}`}
              className="delete-msg__info__product__name"
            >
              {info.name}
            </NavLink>
            <p className="delete-msg__info__product__price">
              ${(info.quantities * info.price).toFixed(2)}
            </p>
            <p className="delete-msg__info__product__desc">{info.desc}</p>
          </div>
          <div className="delete-msg__info__btn">
            <button
              className="delete-msg__info__btn__accept"
              onClick={() => AcceptRemove(info)}
            >
              {loadingAccept ? (
                <div>
                  <div className="delete-msg__info__btn__accept__loading"></div>{" "}
                  Loading...
                </div>
              ) : (
                "Accept"
              )}
            </button>
            {loadingAccept ? (
              <button className="delete-msg__info__btn__cancle__disable">
                Cancle
              </button>
            ) : (
              <button
                className="delete-msg__info__btn__cancle"
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

export default DeleteProductMSG;
