import React, { useState } from "react";

function ReviewCommentItem({ commentIndex, commentItem }) {
  const [current, setCurrent] = useState(-1);
  const [btnHide, setBtnHide] = useState(false);
  const array = [1, 2, 3, 4, 5];
  const commentTrancate = (comments) => {
    const array = comments.split("");
    return array
      .slice(0, 100)
      .map((item, index) => <span key={index}>{item}</span>);
  };
  return (
    <div
      className="product-detail__tabs__content__review__comment__display"
      key={commentIndex}
    >
      <div className="product-detail__tabs__content__review__avatar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          fill="currentColor"
          className="bi bi-person-circle user"
          viewBox="0 0 16 16"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </div>
      <div className="product-detail__tabs__content__review__info">
        <div className="product-detail__tabs__content__review__info__heading">
          <h3 className="product-detail__tabs__content__review__info__name">
            {commentItem.name}
          </h3>
          <span className="product-detail__tabs__content__review__info__date">
            {commentItem.dateCreated}
          </span>
        </div>
        <div className="product-detail__tabs__content__review__info__rating">
          <div className="product-detail__tabs__content__review__info__rating__star">
            {array.slice(0, parseInt(commentItem.rating)).map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-star-fill star-main"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            ))}
          </div>
        </div>
        <p
          style={{
            display: btnHide && current === commentIndex ? "none" : "block",
          }}
          className="product-detail__tabs__content__review__info__desc"
        >
          {commentTrancate(commentItem.comment)}
          {commentItem.comment.length > 100 && "..."}
          {commentItem.comment.length > 100 && (
            <span
              className="product-detail__tabs__content__review__info__view"
              onClick={() => {
                setCurrent(commentIndex);
                setBtnHide(true);
              }}
            >
              View More
            </span>
          )}
        </p>
        {btnHide && current === commentIndex && (
          <p className="product-detail__tabs__content__review__info__desc">
            {commentItem.comment}
            <span
              className="product-detail__tabs__content__review__info__view"
              onClick={() => {
                setBtnHide(false);
              }}
            >
              Hide
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default ReviewCommentItem;
