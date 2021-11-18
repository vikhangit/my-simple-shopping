import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./button";
import "./topProductItem.scss";

function TopProductItem({
  item,
  index,
  showButton,
  currentIndex,
  setShowButton,
  setCurrentIndex,
  onViewDetail,
  handleOnAddToCart,
  isLoading,
  currentLoading,
  showDetailProductMessage,
}) {
  return (
    <div
      className="top-product__item"
      key={index}
      onMouseLeave={() => {
        setCurrentIndex(-1);
        setShowButton(true);
      }}
    >
      <div className="top-product__top">
        <img
          src={item.image}
          alt={item.name}
          className="top-product__image"
          onClick={() => onViewDetail(item.id)}
          onMouseEnter={() => {
            setCurrentIndex(index);
            setShowButton(true);
          }}
        />
        <Button
          showButton={showButton}
          currentIndex={currentIndex}
          index={index}
          item={item}
          isLoading={isLoading}
          currentLoading={currentLoading}
          onViewDetail={onViewDetail}
          handleOnAddToCart={handleOnAddToCart}
          showDetailProductMessage={showDetailProductMessage}
        />
      </div>
      <div className="top-product__info">
        <NavLink to={`product-detail/${item.id}`} className="top-product__name">
          {item.name}
        </NavLink>
        <div className="top-product__price">
          <p className="top-product__price-new">${item.price.toFixed(2)}</p>
          {item.oldPrice > item.price ? (
            <p className="top-product__old-price">
              ${item.oldPrice.toFixed(2)}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
      {item.oldPrice > item.price ? (
        <span className="top-product__badge">
          {(((item.oldPrice - item.price) / item.oldPrice) * 100).toFixed(0)}%
        </span>
      ) : (
        <span className="top-product__badge top-product__badge--hot">Hot</span>
      )}
    </div>
  );
}

export default TopProductItem;
