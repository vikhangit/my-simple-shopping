import React, { useState } from "react";
import "./signInForm.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../../Slice-Reducer/userSlice";

function SignInForm() {
  const users = useSelector((state) => state.users);
  const SignupSchema = yup.object().shape({
    userName: yup
      .string()
      .required("User name is required")
      .test("userName", "User Name dosen't exist", (value) => {
        const find = users.findIndex((x) => x.userName === value);
        if (find >= 0) {
          return true;
        }
      }),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .test("password", "Password is incorrect. Please try again", (value) => {
        const find = users.findIndex((x) => x.password === value);
        if (find >= 0) {
          return true;
        }
      }),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(login(data));
      setIsLoading(false);
      history.goBack();
    }, 2000);
  };
  return (
    <div className="sign-in__form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sign-in__form__field">
          <input
            type="text"
            placeholder="User name"
            style={{ border: errors.userName ? "1px solid #e55472" : 0 }}
            className="sign-in__form__input"
            {...register("userName")}
          />
          {errors.userName && (
            <div className="sign-in__form__error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-exclamation-circle sign-in__form__icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              <p className="sign-in__form__message">
                {errors.userName.message}
              </p>
            </div>
          )}
        </div>
        <div className="sign-in__form__field">
          <input
            className="sign-in__form__input"
            placeholder="Password"
            type="password"
            style={{ border: errors.password ? "1px solid #e55472" : 0 }}
            {...register("password")}
          />
          {errors.password && (
            <div className="sign-in__form__error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-exclamation-circle sign-in__form__icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              <p className="sign-in__form__message">
                {errors.password.message}
              </p>
            </div>
          )}
        </div>
        <button className="sign-in__form__btn">
          {isLoading ? (
            <div>
              <div className="sign-in__form__btn__loading"></div> Loading...
            </div>
          ) : (
            "Sign In"
          )}
        </button>
      </form>
      <div className="sign-in__form__bottom">
        <NavLink to="/forgot-password" className="sign-in__form__forgot">
          FORGOTTEN YOUR PASSWORD?
        </NavLink>
      </div>
    </div>
  );
}

export default SignInForm;
