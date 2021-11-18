import React, { useState } from "react";

function ViewAndHideAll({ comment, visible, setVisible, height }) {
  const [hideComment, setHideComment] = useState(false);
  return (
    <div className="product-detail__tabs__content__review__tool">
      {!hideComment && comment.length > 3 && (
        <button
          className="product-detail__tabs__content__review__tool__btn"
          onClick={() => {
            setVisible((pre) => pre + 2);
            visible + 2 >= comment.length
              ? setHideComment(true)
              : setHideComment(false);
          }}
        >
          <p>View More</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-caret-down"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
          </svg>
        </button>
      )}
      {hideComment && (
        <button
          className="product-detail__tabs__content__review__tool__btn"
          onClick={() => {
            setHideComment(false);
            setVisible(3);
            window.scrollTo(0, height + 200);
          }}
        >
          <p>Hide</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-caret-up"
            viewBox="0 0 16 16"
          >
            <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default ViewAndHideAll;
