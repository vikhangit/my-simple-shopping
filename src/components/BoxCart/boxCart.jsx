import React from "react";
import { NavLink } from "react-router-dom";
import "./boxCart.scss";

function boxCart({
  cart,
  history,
  setBoxCart,
  ClickRemoveProduct,
  handleCheck,
}) {
  const changeChecked = (product) => {
    if (handleCheck) {
      handleCheck(product);
    }
  };
  const total = () => {
    let total = 0;
    let res = 0;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].checked) {
        total += cart[i].quantities * cart[i].price;
      }
    }
    if (total >= 500) {
      res = total;
    } else {
      if (total > 0) {
        res = total + 15;
      }
    }

    return res.toFixed(2);
  };
  return (
    <div className="box-cart">
      <div className="box-cart__wrapper">
        <div className="box-cart__container">
          <div className="box-cart__heading">
            <h3 className="box-cart__heading__title">Cart</h3>
            <button
              className="box-cart__heading__btn"
              onClick={() => setBoxCart(false)}
            >
              X
            </button>
          </div>
          <div className="box-cart__list">
            {cart.map((item) => (
              <div className="box-cart__item" key={item.id}>
                <div className="box-cart__item__image">
                  <NavLink
                    to={`/product-detail/${item.productId}`}
                    onClick={() => setBoxCart(false)}
                  >
                    <img
                      src={item.image}
                      alt={item.image}
                      className="box-cart__item__img"
                    />
                  </NavLink>
                  <span
                    className="box-cart__item__icon"
                    onClick={() => ClickRemoveProduct(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                      <path
                        fillRule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </span>
                </div>
                <div className="box-cart__item__info">
                  <NavLink
                    to={`/product-detail/${item.productId}`}
                    className="box-cart__item__name"
                    onClick={() => setBoxCart(false)}
                  >
                    {item.name}
                  </NavLink>
                  <p className="box-cart__item__price">
                    1 X ${(item.price * item.quantities).toFixed(2)}
                  </p>
                </div>
                <div className="box-cart__item__check">
                  <input
                    onChange={() => changeChecked(item)}
                    type="checkbox"
                    checked={item.checked}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="box-cart__total">
            <h5 className="box-cart__total__title">SubTotal:</h5>
            <p className="box-cart__total__info">${total(cart)}</p>
          </div>
          <div className="box-cart__btn">
            <button
              className="box-cart__btn__view"
              onClick={() => {
                setBoxCart(false);
                history.push("/cart");
              }}
            >
              View Cart
            </button>
            <button
              className="box-cart__btn__check"
              onClick={() => {
                setBoxCart(false);
                history.push("/cart");
              }}
            >
              Check Out
            </button>
          </div>
          <p className="box-cart__desc">
            Free Shipping on All Orders Over $500!
          </p>
        </div>
      </div>
    </div>
  );
}

export default boxCart;
