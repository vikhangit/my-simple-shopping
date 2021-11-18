import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { updateFirstName } from "../../../../../../Slice-Reducer/userSlice";

function FirstName({
  user,
  editFirstName,
  setEditFirstName,
  setEditLastName,
  setEditEmail,
  setEditPassword,
}) {
  const SignupSchema = yup.object().shape({
    firstName: yup.string().required("Plase enter your first name"),
  });
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const [value, setValue] = useState(user.firstName);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(updateFirstName(data));
    setEditFirstName(false);
  };
  return (
    <div className="my-account__info__detail__content__info">
      <h4 className="my-account__info__detail__content__title">First Name</h4>
      {editFirstName ? (
        <div className="my-account__info__detail__content__detail form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="my-account__info__detail__content__detail__input"
              type="text"
              {...register("firstName")}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <div className="my-account__info__detail__content__detail__error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-exclamation-circle my-account__info__detail__content__detail__error__icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                </svg>
                <p className="my-account__info__detail__content__detail__error__message">
                  {errors.firstName.message}
                </p>
              </div>
            )}
            <div className="my-account__info__detail__content__detail__tool">
              <button className="my-account__info__detail__content__detail__btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-cursor-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <p className="my-account__info__detail__content__detail">{value}</p>
      )}
      <div className="my-account__info__detail__content__edit">
        <button
          onClick={() => {
            clearErrors("firstName");
            setEditFirstName(!editFirstName);
            setEditLastName(false);
            setEditEmail(false);
            setEditPassword(false);
          }}
          className="my-account__info__detail__content__btn"
        >
          {editFirstName ? "cancle" : "edit"}
        </button>
      </div>
    </div>
  );
}

export default FirstName;
