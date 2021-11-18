import React from "react";
import { NavLink } from "react-router-dom";
import "./orderDetail.scss";

function OrderDetail({ infoDetail, setShowDetail, orderTotal }) {
  return (
    <div className="order-detail">
      <div className="order-detail__container">
        <div className="order-detail__info">
          <div className="order-detail__info__heading">
            <h3 className="order-detail__info__heading__title">
              Order Details
            </h3>
            <button
              className="order-detail__info__heading__btn"
              onClick={() => setShowDetail(false)}
            >
              X
            </button>
          </div>
          <div className="order-detail__info__content">
            <div className="order-detail__info__content__product">
              {infoDetail.product.map((item, index) => (
                <div
                  key={index}
                  className="order-detail__info__content__detail"
                >
                  <NavLink to={`/product-detail/${item.id}`}>
                    <img
                      className="order-detail__info__content__detail__image"
                      src={item.image}
                      alt=""
                    />
                  </NavLink>
                  <NavLink
                    to={`/product-detail/${item.id}`}
                    className="order-detail__info__content__detail__name"
                  >
                    {item.name}
                  </NavLink>
                  <div className="order-detail__info__content__detail__price">
                    ${item.price} x {item.quantities}
                  </div>
                  <div className="order-detail__info__content__detail__total">
                    ${(item.price * item.quantities).toFixed(2)}
                  </div>
                  <div className="order-detail__info__content__detail__desc">
                    {item.desc}
                  </div>
                  <div className="order-detail__info__content__detail__action">
                    <NavLink
                      to={`/product-detail/${item.id}`}
                      className="order-detail__info__content__detail__action__btn"
                    >
                      View Info
                    </NavLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-detail__info__bonus">
            <div className="order-detail__info__bonus__title">
              <h5 className="order-detail__info__bonus__title__ship">
                Shipping
              </h5>
              <h5 className="order-detail__info__bonus__title__total">Total</h5>
            </div>
            <div className="order-detail__info__bonus__detail">
              <p className="order-detail__info__bonus__detail__ship">$15.00</p>
              <p className="order-detail__info__bonus__detail__total">
                ${orderTotal(infoDetail.product)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetail;
