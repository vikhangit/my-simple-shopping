import React from "react";
import AboutOurShop from "../AboutOurShop/aboutOurShop";
import CustomerService from "../CustomerService/customerService";
import Infomation from "../Infomation/infomation";
import MyAccount from "../MyAccount/myAccount";
import QuickLink from "../QuickLink/quickLink";

function FooterTop() {
  return (
    <div className="footer__top">
      <ul className="footer__list">
        <MyAccount />
        <QuickLink />
        <Infomation />
        <CustomerService />
        <AboutOurShop />
      </ul>
    </div>
  );
}

export default FooterTop;
