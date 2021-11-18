import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import MyAccountSlidebar from "../MyAccountSlidebar/myAccountSlidebar";
import { logout } from "../../../../Slice-Reducer/userSlice";
import "./myAccount.scss";
import MyAccountInfo from "../MyAccountInfo/MyAccountInfo/myAccountInfo";

function MyAccountMain() {
  const user = JSON.parse(localStorage.getItem("user-login"));
  const [dashboard, setDashboard] = useState(true);
  const [order, setOrder] = useState(false);
  const [address, setAddress] = useState(false);
  const [detail, setDetail] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if (!user) {
      history.push("/sign-in");
    }
  }, [history, user]);
  const LogoutAccount = (data) => {
    setDashboard(true);
    setOrder(false);
    setAddress(false);
    setDetail(false);
    dispatch(logout(data));
    history.push("/sign-in");
  };
  return (
    <section className="my-account">
      <div className="page">
        <h2 className="page__title">Account</h2>
        <div className="page__breadcrumb">
          <NavLink to="/" className="page__breadcrumb__link">
            Home
          </NavLink>
          <p>My Account</p>
        </div>
      </div>
      <div className="container">
        <div className="my-account__content">
          <MyAccountSlidebar
            user={user}
            dashboard={dashboard}
            order={order}
            address={address}
            detail={detail}
            setDashboard={setDashboard}
            setOrder={setOrder}
            setAddress={setAddress}
            setDetail={setDetail}
            LogoutAccount={LogoutAccount}
          />
          <MyAccountInfo
            user={user}
            dashboard={dashboard}
            order={order}
            address={address}
            detail={detail}
            LogoutAccount={LogoutAccount}
          />
        </div>
      </div>
    </section>
  );
}

export default MyAccountMain;
