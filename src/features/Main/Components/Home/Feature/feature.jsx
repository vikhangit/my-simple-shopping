import React from "react";
import "./feature.scss";
import { Images } from "../../../../../constants/images";

function Feature() {
  return (
    <div className="container">
      <section className="feature">
        <ul className="feature__list">
          <li className="feature__item">
            <img
              src={Images.Feature_1}
              alt={"Feature_1"}
              className="feature__image"
            />
            <div className="feature__info">
              <h4 className="feature__info__title">Free Shipping</h4>
              <p className="feature__info__desc">On all order over $49.00</p>
            </div>
          </li>
          <li className="feature__item">
            <img
              src={Images.Feature_2}
              alt={"Feature_2"}
              className="feature__image"
            />
            <div className="feature__info">
              <h4 className="feature__info__title">15 days returns</h4>
              <p className="feature__info__desc">Moneyback guarantee</p>
            </div>
          </li>
          <li className="feature__item">
            <img
              src={Images.Feature_3}
              alt={"Feature_3"}
              className="feature__image"
            />
            <div className="feature__info">
              <h4 className="feature__info__title">Secure checkout</h4>
              <p className="feature__info__desc">Protected by Paypal</p>
            </div>
          </li>
          <li className="feature__item">
            <img
              src={Images.Feature_4}
              alt={"Feature_4"}
              className="feature__image"
            />
            <div className="feature__info">
              <h4 className="feature__info__title">Offer & gift here</h4>
              <p className="feature__info__desc">On all orders over</p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Feature;
