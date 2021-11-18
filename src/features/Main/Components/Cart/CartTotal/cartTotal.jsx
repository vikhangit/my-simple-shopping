import React from "react";
import "./cartTotal.scss";

const totalPrice = (cart) => {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].checked) {
      total += cart[i].quantities * cart[i].price;
    }
  }
  return total.toFixed(2);
};
const orderTotal = (cart) => {
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
    res = total + 15;
  }

  return res.toFixed(2);
};
const shipping = (cart) => {
  let total = 0;
  let result = "";
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].checked) {
      total += cart[i].quantities * cart[i].price;
    }
  }
  if (total >= 500) {
    result = <p>$0.00</p>;
  } else {
    result = <p>$15.00</p>;
  }
  return result;
};

function CartTotal({ cart, onCheckOut, isLoading }) {
  return (
    <div className="cart__total">
      <div className="cart__total__content">
        <h3 className="cart__total__heading">Cart Total</h3>
        <div className="cart__total__info">
          <div className="cart__total__info__title">
            <h4>Cart Subtotal</h4>
            <h4>Shipping and Handing</h4>
            <h4>Vat</h4>
            <h4>Order Total</h4>
          </div>
          <div className="cart__total__info__price">
            <p>${totalPrice(cart)}</p>
            {shipping(cart)}
            <p>$0.00</p>
            <p>${totalPrice(cart) > 0 ? orderTotal(cart) : "0.00"}</p>
          </div>
        </div>
        <div>
          <button className="cart__total__btn" onClick={() => onCheckOut(cart)}>
            {isLoading ? (
              <div>
                <div className="cart__total__btn__loading"></div> Loading...
              </div>
            ) : (
              "Proccess To Checkout"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
