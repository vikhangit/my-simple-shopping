import React from "react";
import { NavLink } from "react-router-dom";
import "./productMessage.scss";

function ProductMessage({ closeMessage, info }) {
  return (
    <div className="product-message">
      <div className="product-message__container">
        <div className="product-message__info">
          <div className="product-message__info__heading">
            <h3 className="product-message__info__heading__title">Product</h3>
            <button
              className="product-message__info__heading__btn"
              onClick={closeMessage}
            >
              X
            </button>
          </div>
          <div className="product-message__info__product">
            <NavLink
              to={`/product-detail/${info.id}`}
              className="product-message__info__product__image"
            >
              <img src={info.image} alt={info.image} />
            </NavLink>
            <div className="product-message__info__product__detail">
              <NavLink
                to={`/product-detail/${info.id}`}
                className="product-message__info__product__name"
              >
                {info.name}
              </NavLink>
              <p className="product-message__info__product__price">
                ${info.price.toFixed(2)}
              </p>
              <p className="product-message__info__product__desc">
                {info.desc}
              </p>
            </div>
          </div>
          <div className="product-message__info__btn">
            <NavLink
              to={`/product-detail/${info.id}`}
              className="product-message__info__btn__view"
            >
              View Detail
            </NavLink>
            <button
              className="product-message__info__btn__cancle"
              onClick={closeMessage}
            >
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductMessage;
