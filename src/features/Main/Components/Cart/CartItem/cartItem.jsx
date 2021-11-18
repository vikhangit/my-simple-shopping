import React from "react";
import "./cartItem.scss";
import { NavLink } from "react-router-dom";

function CartItem({
  index,
  item,
  ClickRemoveProduct,
  increaseQuantity,
  decreaseQuantity,
  handleCheck,
  isLoading,
  current,
}) {
  const changeChecked = (product) => {
    if (handleCheck) {
      handleCheck(product);
    }
  };
  return (
    <div className="cart__item">
      <div className="cart__item__check">
        <input
          onChange={() => changeChecked(item)}
          type="checkbox"
          checked={item.checked}
        />
      </div>
      <NavLink
        to={`/product-detail/${item.productId}`}
        className="cart__item__image"
      >
        <img src={item.image} alt={item.image} />
      </NavLink>
      <div className="cart__item__info">
        <NavLink
          to={`/product-detail/${item.productId}`}
          className="cart__item__name"
        >
          {item.name}
        </NavLink>
        <p className="cart__item__price">${item.price.toFixed(2)}</p>

        <div className="cart__item__quantity">
          <button
            className="cart__item__quantity__increase"
            onClick={() => decreaseQuantity(item)}
          >
            -
          </button>
          <p>{item.quantities}</p>
          <button
            className="cart__item__quantity__decrease"
            onClick={() => increaseQuantity(item)}
          >
            +
          </button>
        </div>
        <p className="cart__item__total">
          ${(item.price * item.quantities).toFixed(2)}
        </p>
        <button
          className="cart__item__remove"
          onClick={() => ClickRemoveProduct(item, index)}
        >
          {current === index && isLoading ? (
            <div>
              <div className="cart__item__remove__loading"></div>
            </div>
          ) : (
            "X"
          )}
        </button>
      </div>
    </div>
  );
}

export default CartItem;
