import React from "react";
import "./menu.scss";

function Menu({ setDesc, setReview, setShipping }) {
  return (
    <div className="product-detail__tabs__memu">
      <button
        className="product-detail__tabs__btn"
        onClick={() => {
          setDesc(true);
          setReview(false);
          setShipping(false);
        }}
      >
        Infomation
      </button>
      <button
        className="product-detail__tabs__btn"
        onClick={() => {
          setReview(true);
          setDesc(false);
          setShipping(false);
        }}
      >
        Review
      </button>
      <button
        className="product-detail__tabs__btn"
        onClick={() => {
          setShipping(true);
          setDesc(false);
          setReview(false);
        }}
      >
        Shipping
      </button>
    </div>
  );
}

export default Menu;
