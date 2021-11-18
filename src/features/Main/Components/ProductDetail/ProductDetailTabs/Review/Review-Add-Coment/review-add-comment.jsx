import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./review-add-comment.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addNewComment } from "../../../../../../Slice-Reducer/commentSlice";
import ReviewAddCommentRating from "../Review-Add-Coment/review-add-comment-rating";
import AddNewComment from "../../../../Message/AddNewComment/AddNewComment";

function ReviewAddComment({
  product,
  user,
  dateCreated,
  setShowMessage,
  setIsLoading,
  showMessage,
  isLoading,
}) {
  const SignupSchema = yup.object().shape({
    comment: yup.string().required("Plase enter your comment"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  // Rating
  const [rate, setRate] = useState(0);
  const [errorRating, setErrorRating] = useState(false);
  // Date

  // Submit Form
  const dispatch = useDispatch();
  const history = useHistory();
  const onSubmit = (data) => {
    if (user) {
      if (rate <= 0) {
        setErrorRating(true);
      } else {
        setErrorRating(false);
        setIsLoading(true);
        setTimeout(() => {
          setShowMessage(true);
          setIsLoading(false);
          dispatch(addNewComment(data));
          reset({
            comment: "",
          });
          setTimeout(() => {
            setShowMessage(false);
          }, 2000);
        }, 3000);
      }
    } else {
      history.push("/sign-in");
    }
  };
  return (
    <div className="product-detail__tabs__content__review__add">
      <h3 className="product-detail__tabs__content__review__add__heading">
        Add New Review
      </h3>
      <ReviewAddCommentRating
        rate={rate}
        setRate={setRate}
        errorRating={errorRating}
        setErrorRating={setErrorRating}
        dispatch={dispatch}
      />
      {errorRating && (
        <div className="product-detail__tabs__content__review__add__error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-exclamation-circle product-detail__tabs__content__review__add__error__icon"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          </svg>
          <p className="product-detail__tabs__content__review__add__error__message">
            Please select rating for this product
          </p>
        </div>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="product-detail__tabs__content__review__add__from"
      >
        <div className="product-detail__tabs__content__review__add__field">
          <textarea
            type="text"
            placeholder="Your Comment..."
            style={{ border: errors.comment ? "1px solid #e55472" : 0 }}
            className="product-detail__tabs__content__review__add__textarea"
            {...register("comment")}
          />
          {errors.comment && (
            <div className="product-detail__tabs__content__review__add__error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-exclamation-circle product-detail__tabs__content__review__add__error__icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              <p className="product-detail__tabs__content__review__add__error__message">
                {errors.comment.message}
              </p>
            </div>
          )}
          <span className="product-detail__tabs__content__review__add__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-pencil-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg>
          </span>
        </div>
        <div className="product-detail__tabs__content__review__add__field">
          <input hidden value={product.id} {...register("productId")} />
          <input hidden value={dateCreated} {...register("dateCreated")} />
          {user && (
            <div>
              <input hidden value={user.id} {...register("userId")} />
              <input
                hidden
                value={`${user.firstName} ${user.lastName}`}
                {...register("name")}
              />
            </div>
          )}
        </div>
        <div className="product-detail__tabs__content__review__add__submit">
          <button className="product-detail__tabs__content__review__add__btn">
            {isLoading ? (
              <div style={{ textAlign: "center" }}>
                <div className="product-detail__tabs__content__review__add__btn__loading"></div>{" "}
                Loading...
              </div>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
      {showMessage && <AddNewComment setShowMessage={setShowMessage} />}
    </div>
  );
}

export default ReviewAddComment;
