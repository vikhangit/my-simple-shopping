import React, { useState } from "react";
import "./tool.scss";

function Tool({ product, handleOnAddToCart, isLoading }) {
  const [count, setCount] = useState(1);
  localStorage.setItem("count", count);
  return (
    <div className="product-detail__tool">
      <div className="product-detail__btn__quantity">
        <button
          className="product-detail__btn__decrease"
          onClick={() => {
            setCount(count <= 1 ? 1 : count - 1);
          }}
        >
          -
        </button>
        <p>{count}</p>
        <button
          className="product-detail__btn__decrease"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
      <button
        className="product-detail__btn__add"
        onClick={() => {
          handleOnAddToCart(product);
        }}
      >
        {isLoading ? (
          <div>
            <div className="product-detail__btn__add__loading"></div> Loading...
          </div>
        ) : (
          "Add To Cart"
        )}
      </button>
      <button className="product-detail__btn__like">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="currentColor"
          className="bi bi-heart"
          viewBox="0 0 16 16"
        >
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
        </svg>
      </button>
    </div>
  );
}

export default Tool;
