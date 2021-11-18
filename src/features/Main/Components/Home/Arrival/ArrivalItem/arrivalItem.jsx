import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./button";
import "./arrivalItem.scss";

function ArrivalItem({
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
      className="arrival__item"
      key={index}
      onMouseLeave={() => {
        setCurrentIndex(-1);
        setShowButton(true);
      }}
    >
      <div className="arrival__top">
        <div
          onMouseEnter={() => {
            setCurrentIndex(index);
            setShowButton(true);
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            className="arrival__image"
            onClick={() => onViewDetail(item.id)}
          />
        </div>
        <Button
          showButton={showButton}
          currentIndex={currentIndex}
          index={index}
          item={item}
          isLoading={isLoading}
          currentLoading={currentLoading}
          handleOnAddToCart={handleOnAddToCart}
          onViewDetail={onViewDetail}
          showDetailProductMessage={showDetailProductMessage}
        />
      </div>
      <div className="arrival__info">
        <NavLink to={`/product-detail/${item.id}`} className="arrival__name">
          {item.name}
        </NavLink>
        <div className="arrival__price">
          <p className="arrival__price-new">${item.price.toFixed(2)}</p>
          {item.oldPrice > item.price ? (
            <p className="arrival__old-price">${item.oldPrice.toFixed(2)}</p>
          ) : (
            ""
          )}
        </div>
      </div>
      {item.oldPrice > item.price ? (
        <span className="arrival__badge">
          {(((item.oldPrice - item.price) / item.oldPrice) * 100).toFixed(0)}%
        </span>
      ) : (
        <span className="arrival__badge arrival__badge--hot">Hot</span>
      )}
    </div>
  );
}

export default ArrivalItem;
