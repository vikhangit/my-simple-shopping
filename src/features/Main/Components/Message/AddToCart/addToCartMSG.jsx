import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import "./addToCartMSG.scss";
function AddToCartMSG({ info, setShowMessage, closeMessage }) {
  const history = useHistory();
  return (
    <div className="add-to-cart-msg">
      <div className="add-to-cart-msg__container">
        <div className="add-to-cart-msg__info">
          <div className="add-to-cart-msg__info__heading">
            <h3 className="add-to-cart-msg__info__heading__title">Message</h3>
            <button
              className="add-to-cart-msg__info__heading__btn"
              onClick={closeMessage}
            >
              X
            </button>
          </div>
          <div className="add-to-cart-msg__info__check">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              fill="currentColor"
              className="bi bi-check-circle add-to-cart-msg__info__icon small"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
            </svg>
          </div>
          <p className="add-to-cart-msg__info__message">Succeffully</p>
          <p className="add-to-cart-msg__info__desc">
            This product has been added to the your shopping cart
          </p>
          <div className="add-to-cart-msg__info__product">
            <NavLink
              to={`/product-detail/${info.id}`}
              className="add-to-cart-msg__info__product__image"
            >
              <img src={info.image} alt={info.image} />
            </NavLink>
            <NavLink
              to={`/product-detail/${info.id}`}
              className="add-to-cart-msg__info__product__name"
            >
              {info.name}
            </NavLink>
            <p className="add-to-cart-msg__info__product__price">
              ${info.price.toFixed(2)}
            </p>
            <p className="add-to-cart-msg__info__product__desc">{info.desc}</p>
          </div>
          <p className="add-to-cart-msg__info__ship">
            Free Shipping on All Orders Over $500!
          </p>
          <div className="add-to-cart-msg__info__btn">
            <button
              className="add-to-cart-msg__info__btn__view"
              onClick={() => history.push("/cart")}
            >
              View Cart
            </button>
            <button
              className="add-to-cart-msg__info__btn__cancle"
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

export default AddToCartMSG;
