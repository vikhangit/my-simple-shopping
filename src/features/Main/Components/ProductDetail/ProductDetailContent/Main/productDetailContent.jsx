import React, { useState } from "react";
import "./productDetailContent.scss";
import Share from "../Share/share";
import Tool from "../Tool/tool";
import Extend from "../Extend/extend";
import Rating from "../Rating/rating";

function ProductDetailContent({
  product,
  rating,
  handleOnAddToCart,
  isLoading,
}) {
  const description = product.desc.split("");
  const [visible, setVisible] = useState(150);
  return (
    <div className="product-detail__content">
      <div className="product-detail__image">
        <img src={product.image} alt="" />
      </div>
      <div className="product-detail__info">
        <h2 className="product-detail__name">{product.name}</h2>

        <div className="product-detail__price">
          <p className="product-detail__new-price">
            ${product.price.toFixed(2)}
          </p>
          {product.oldPrice > product.price ? (
            <p className="product-detail__old-price">
              ${product.oldPrice.toFixed(2)}
            </p>
          ) : (
            ""
          )}
        </div>
        <p className="product-detail__desc">
          {description.slice(0, visible).map((desc, index) => (
            <span key={index}>{desc}</span>
          ))}
          {visible < description.length && "..."}
          <span
            className="product-detail__desc__btn"
            onClick={() => {
              if (visible < description.length) {
                setVisible(description.length);
              } else {
                setVisible(150);
              }
            }}
          >
            {visible < description.length ? "see more" : "hide"}
          </span>
        </p>
        <Rating rating={rating} product={product} />
        <Tool
          handleOnAddToCart={handleOnAddToCart}
          product={product}
          isLoading={isLoading}
        />
        <Share />
        <Extend product={product} />
      </div>
    </div>
  );
}

export default ProductDetailContent;
