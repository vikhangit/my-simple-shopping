import React from "react";
import "./shipping.scss";

function Shipping({ shipping }) {
  return (
    <div>
      {shipping && (
        <div className="product-detail__tabs__content__shipping">
          <h2 className="product-detail__tabs__content__shipping__title">
            Shipping policy for our store
          </h2>
          <p className="product-detail__tabs__content__shipping__desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            voluptates rerum neque ea libero numquam officiis ipsum, consectetur
            ducimus dicta in earum repellat sunt ab odit laboriosam cupiditate
            ipsam, doloremque.
          </p>
          <ul className="product-detail__tabs__content__shipping__list">
            <li className="product-detail__tabs__content__shipping__item">
              1-2 business days (Typically by end of day)
            </li>
            <li className="product-detail__tabs__content__shipping__item">
              30 days money back guaranty
            </li>
            <li className="product-detail__tabs__content__shipping__item">
              24/7 live support
            </li>
            <li className="product-detail__tabs__content__shipping__item">
              Odio dignissim qui blandit praesent
            </li>
            <li className="product-detail__tabs__content__shipping__item">
              luptatum zzril delenit augue duis dolore
            </li>
            <li className="product-detail__tabs__content__shipping__item">
              te feugait nulla facilisi
            </li>
          </ul>
          <p className="product-detail__tabs__content__shipping__desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
            voluptates rerum neque ea libero numquam officiis ipsum, consectetur
            ducimus dicta in earum repellat sunt ab odit laboriosam cupiditate
            ipsam, doloremque.
          </p>
        </div>
      )}
    </div>
  );
}

export default Shipping;
