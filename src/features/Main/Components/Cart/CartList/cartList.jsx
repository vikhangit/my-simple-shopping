import React, { useState } from "react";
import "./cartList.scss";
import { useDispatch } from "react-redux";
import CartItem from "../CartItem/cartItem";
import {
  changeChecked,
  decrementQuantity,
  incrementQuantity,
  removeProductInCart,
} from "../../../../Slice-Reducer/cartSlice";
import DeleteProductMSG from "../../Message/DeleProduct/deleteProductMSG";
import DeleteSuccess from "../../Message/DeleteProductSuccess/DeleteSuccess";

function CartList({ cart }) {
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingAccept, setLoadingAccept] = useState(false);
  const [current, setCurrent] = useState(-1);
  const [info, setInfo] = useState();
  const [notify, setNotify] = useState(false);
  const dispatch = useDispatch();
  const increaseQuantity = (product) => {
    dispatch(incrementQuantity(product));
  };
  const decreaseQuantity = (product) => {
    dispatch(decrementQuantity(product));
  };
  const ClickRemoveProduct = (product, number) => {
    setInfo(product);
    setCurrent(number);
    setIsLoading(true);
    setTimeout(() => {
      setShowMessage(true);
      setIsLoading(false);
    }, 2000);
  };
  const AcceptRemove = (product) => {
    setLoadingAccept(true);
    setTimeout(() => {
      dispatch(removeProductInCart(product));
      setShowMessage(false);
      setNotify(true);
      setLoadingAccept(false);
      setTimeout(() => {
        setNotify(false);
      }, 2000);
    }, 3000);
  };
  const handleCheck = (product) => {
    dispatch(changeChecked(product));
  };
  return (
    <div className="cart__list">
      {cart.map((item, index) => (
        <div key={index}>
          <CartItem
            item={item}
            index={index}
            current={current}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            ClickRemoveProduct={ClickRemoveProduct}
            handleCheck={handleCheck}
            isLoading={isLoading}
          />
        </div>
      ))}
      {showMessage && (
        <DeleteProductMSG
          info={info}
          setShowMessage={setShowMessage}
          AcceptRemove={AcceptRemove}
          setNotify={setNotify}
          loadingAccept={loadingAccept}
        />
      )}
      {notify && <DeleteSuccess setNotify={setNotify} />}
    </div>
  );
}

export default CartList;
