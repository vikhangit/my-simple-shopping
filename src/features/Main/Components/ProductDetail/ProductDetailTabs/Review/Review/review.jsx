import React, { useState } from "react";
import "./review.scss";
import ReviewComment from "../Review-Comment/review-comment";
import ReviewAddComment from "../Review-Add-Coment/review-add-comment";
import { useSelector } from "react-redux";

function Review({ review, product, rating }) {
  const user = JSON.parse(localStorage.getItem("user-login"));
  const comment = useSelector((state) => {
    const find = state.comment.filter(
      (x) => parseInt(x.productId) === parseInt(product.id)
    );
    return find;
  });
  const date = new Date();
  const day = date.getDate();
  const getMonth = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(date);
  const year = date.getFullYear();
  const dateCreated = `${getMonth} ${day}, ${year}`;
  // Loading
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      {review && (
        <div className="product-detail__tabs__content__review">
          <h2 className="product-detail__tabs__content__review__title">
            Customer Reviews
          </h2>
          <div className="product-detail__tabs__content__review__rating">
            {rating.map((item) => (
              <p
                key={item}
                className="product-detail__tabs__content__review__star"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-star-fill star"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </p>
            ))}
            <p>({product.views} Views)</p>
          </div>
          <div className="product-detail__tabs__content__review__more">
            <ReviewComment user={user} comment={comment} />
            <ReviewAddComment
              user={user}
              product={product}
              dateCreated={dateCreated}
              setShowMessage={setShowMessage}
              showMessage={showMessage}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Review;
