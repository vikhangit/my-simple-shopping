import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import CartList from "../../Components/Cart/CartList/cartList";
import CartTotal from "../../Components/Cart/CartTotal/cartTotal";
import CartEmpty from "../../Components/Cart/CartEmpty/cartEmpty";
import { useDispatch, useSelector } from "react-redux";
import CartNoChecked from "../../Components/Message/CartNoChecked/cartNoChecked";
import ProcessCheckOut from "../../Components/Message/ProcessCheckOut/processCheckOut";
import { addCheckout } from "../../../Slice-Reducer/checkoutSlice";
import { removeAllProductChecked } from "../../../Slice-Reducer/cartSlice";

function Cart() {
  const user = JSON.parse(localStorage.getItem("user-login"));
  const cart = useSelector((state) => {
    const data = state.cart.filter((x) => x.userId === user.id);
    return data;
  });
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [notifyCheckedProduct, setNotifyCheckedProduct] = useState(false);
  const onCheckOut = (data) => {
    const value = data.filter((x) => x.checked === true);
    if (value.length > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setShowMessage(true);
        dispatch(addCheckout(value));
        dispatch(removeAllProductChecked(value));
        setIsLoading(false);
      }, 2000);
    } else {
      setNotifyCheckedProduct(true);
    }
  };
  return (
    <section className="cart">
      <div className="page">
        <h2 className="page__title">Cart</h2>
        <div className="page__breadcrumb">
          <NavLink to="/" className="page__breadcrumb__link">
            Home
          </NavLink>
          <p>Cart</p>
        </div>
      </div>
      {cart && cart.length > 0 ? (
        <div className="container">
          <CartList cart={cart} />
          <CartTotal
            isLoading={isLoading}
            onCheckOut={onCheckOut}
            cart={cart}
          />
        </div>
      ) : (
        <div className="container">
          <CartEmpty />
        </div>
      )}
      {notifyCheckedProduct && (
        <CartNoChecked setNotify={setNotifyCheckedProduct} />
      )}
      {showMessage && <ProcessCheckOut setShowMessage={setShowMessage} />}
    </section>
  );
}

export default Cart;
