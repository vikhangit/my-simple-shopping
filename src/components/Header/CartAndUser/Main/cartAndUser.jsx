import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DeleteProductMSG from "../../../../features/Main/Components/Message/DeleProduct/deleteProductMSG";
import DeleteSuccess from "../../../../features/Main/Components/Message/DeleteProductSuccess/DeleteSuccess";
import {
  changeChecked,
  removeProductInCart,
} from "../../../../features/Slice-Reducer/cartSlice";
import { logout } from "../../../../features/Slice-Reducer/userSlice";
import BoxCart from "../../../BoxCart/boxCart";
import Cart from "../Cart/cart";
import User from "../User/user";
import "./cartAndUser.scss";
function CartAndUser({ boxCart, setBoxCart }) {
  const user = JSON.parse(localStorage.getItem("user-login"));
  const cart = useSelector((state) => {
    let data = [];
    if (user) {
      data = state.cart.filter((x) => x.userId === user.id);
    }
    return data;
  });
  const [showDialog, setShowDialog] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [loadingAccept, setLoadingAccept] = useState(false);
  const [notify, setNotify] = useState(false);
  const [info, setInfo] = useState();
  const history = useHistory();
  const dispatch = useDispatch();
  const ClickRemoveProduct = (product) => {
    setInfo(product);
    setTimeout(() => {
      setShowMessage(true);
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
  const LogoutAccount = (data) => {
    dispatch(logout(data));

    history.push("/sign-in");
  };
  return (
    <div className="header__right">
      <User
        user={user}
        showDialog={showDialog}
        setShowDialog={setShowDialog}
        LogoutAccount={LogoutAccount}
      />
      <Cart user={user} cart={cart} setBoxCart={setBoxCart} />
      {boxCart && (
        <BoxCart
          cart={cart}
          boxCart={boxCart}
          setBoxCart={setBoxCart}
          history={history}
          ClickRemoveProduct={ClickRemoveProduct}
          handleCheck={handleCheck}
        />
      )}
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

export default CartAndUser;
