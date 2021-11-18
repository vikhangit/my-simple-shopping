import React from "react";
import "./productDetailTabs.scss";
import Menu from "../Menu/menu";
import Description from "../Description/description";
import Shipping from "../Shipping/shipping";
import Review from "../Review/Review/review";

function ProductDetailTabs({
  product,
  rating,
  desc,
  setDesc,
  review,
  setReview,
  shipping,
  setShipping,
}) {
  return (
    <div className="product-detail__tabs">
      <Menu setDesc={setDesc} setShipping={setShipping} setReview={setReview} />
      <div className="product-detail__tabs__content">
        <Description desc={desc} product={product} />
        <Review review={review} product={product} rating={rating} />
        <Shipping shipping={shipping} />
      </div>
    </div>
  );
}

export default ProductDetailTabs;
