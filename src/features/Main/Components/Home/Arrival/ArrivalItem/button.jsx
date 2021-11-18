import React from "react";
import "./button.scss";
function Button({
  showButton,
  currentIndex,
  index,
  item,
  isLoading,
  currentLoading,
  onViewDetail,
  handleOnAddToCart,
  showDetailProductMessage,
}) {
  return (
    <div>
      {(
        window.screen.width > 1024
          ? showButton && currentIndex === index
          : showButton
      ) ? (
        <div className="arrival__tool">
          <button
            className="arrival__tool__find"
            onClick={() => showDetailProductMessage(item)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
          <button
            className="arrival__tool__addToCart"
            onClick={() => handleOnAddToCart(item, index)}
          >
            {isLoading && currentLoading === index ? (
              <div>
                <div className="arrival__tool__addToCart__loading"></div>{" "}
                Loading...
              </div>
            ) : (
              "Add To Cart"
            )}
          </button>
          <button
            className="arrival__tool__info"
            onClick={() => onViewDetail(item.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-info-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Button;
