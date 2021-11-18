import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { updateEmail } from "../../../../../../Slice-Reducer/userSlice";

function Email({
  user,
  editEmail,
  setEditEmail,
  setEditFirstName,
  setEditLastName,
  setEditPassword,
}) {
  const SignupSchema = yup.object().shape({
    email: yup
      .string()
      .email("Email invalid format")
      .required("Plase enter your email"),
  });
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const [value, setValue] = useState(user.email);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(updateEmail(data));
    setEditEmail(false);
  };
  return (
    <div className="my-account__info__detail__content__info">
      <h4 className="my-account__info__detail__content__title">Email</h4>
      {editEmail ? (
        <div className="my-account__info__detail__content__detail form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="my-account__info__detail__content__detail__input"
              type="text"
              {...register("email")}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter your email"
            />
            {errors.email && (
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
                  {errors.email.message}
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
        <p className="my-account__info__detail__content__detail email">
          {value}
        </p>
      )}
      <div className="my-account__info__detail__content__edit">
        <button
          onClick={() => {
            clearErrors("email");
            setEditFirstName(false);
            setEditLastName(false);
            setEditEmail(!editEmail);
            setEditPassword(false);
          }}
          className="my-account__info__detail__content__btn email__btn"
        >
          {editEmail ? "cancle" : "edit"}
        </button>
      </div>
    </div>
  );
}

export default Email;
