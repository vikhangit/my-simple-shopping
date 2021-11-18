import React from "react";
import "./myAccountInfo.scss";
import Address from "../Address/address";
import Dashboard from "../Dashboard/dashboard";
import Oder from "../Order/oder";
import AccountDetail from "../AccountDetail/AccountDetail/accountDetail";

function MyAccountInfo({
  user,
  dashboard,
  order,
  address,
  detail,
  LogoutAccount,
}) {
  return (
    <div className="my-account__info">
      <Dashboard
        user={user}
        dashboard={dashboard}
        LogoutAccount={LogoutAccount}
      />
      <Oder order={order} />
      <Address user={user} address={address} />
      <AccountDetail user={user} detail={detail} />
    </div>
  );
}

export default MyAccountInfo;
