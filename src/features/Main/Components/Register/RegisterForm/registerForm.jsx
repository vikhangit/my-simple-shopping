import React, { useState } from "react";
import "./registerForm.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addNew } from "../../../../Slice-Reducer/userSlice";
import RegisterSuccess from "../../Message/RegisterSuccess/registerSuccess";

function RegisterForm() {
  const users = useSelector((state) => state.users);
  const SignupSchema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    userName: yup
      .string()
      .required("User Name is required")
      .test("userName", "User Name dose exist", (value) => {
        const find = users.findIndex((x) => x.userName === value);
        if (find < 0) {
          return true;
        }
      }),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf(
        [yup.ref("password"), null],
        "Confirm Password must be match as Password"
      ),
    agreeCreate: yup
      .bool()
      .oneOf([true], "Plase consent to the privacy policy"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (data) => {
    setIsLoading(true);
    setTimeout(() => {
      setShowMessage(true);
      setIsLoading(false);
      dispatch(addNew(data));
      reset({
        firstName: "",
        lastName: "",
        userName: "",
        password: "",
        confirmPassword: "",
        agreeCreate: false,
      });
    }, 2000);
  };
  return (
    <div className="register__form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="register__form__field">
          <input
            type="text"
            placeholder="First Name"
            style={{ border: errors.firstName ? "1px solid #e55472" : 0 }}
            className="register__form__input"
            {...register("firstName")}
          />
          {errors.firstName && (
            <div className="register__form__error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-exclamation-circle register__form__icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              <p className="register__form__message">
                {errors.firstName.message}
              </p>
            </div>
          )}
        </div>
        <div className="register__form__field">
          <input
            type="text"
            placeholder="Last Name"
            style={{ border: errors.lastName ? "1px solid #e55472" : 0 }}
            className="register__form__input"
            {...register("lastName")}
          />
          {errors.lastName && (
            <div className="register__form__error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-exclamation-circle register__form__icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              <p className="register__form__message">
                {errors.lastName.message}
              </p>
            </div>
          )}
        </div>
        <div className="register__form__field">
          <input
            type="text"
            placeholder="User Name"
            style={{ border: errors.userName ? "1px solid #e55472" : 0 }}
            className="register__form__input"
            {...register("userName")}
          />
          {errors.userName && (
            <div className="register__form__error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-exclamation-circle register__form__icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              <p className="register__form__message">
                {errors.userName.message}
              </p>
            </div>
          )}
        </div>
        <div className="register__form__field">
          <input
            className="register__form__input"
            placeholder="Password"
            type="password"
            style={{ border: errors.password ? "1px solid #e55472" : 0 }}
            {...register("password")}
          />
          {errors.password && (
            <div className="register__form__error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-exclamation-circle register__form__icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              <p className="register__form__message">
                {errors.password.message}
              </p>
            </div>
          )}
        </div>
        <div className="register__form__field">
          <input
            className="register__form__input"
            placeholder="Confirm Password"
            type="password"
            style={{ border: errors.password ? "1px solid #e55472" : 0 }}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <div className="register__form__error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-exclamation-circle register__form__icon"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
              </svg>
              <p className="register__form__message">
                {errors.confirmPassword.message}
              </p>
            </div>
          )}
        </div>
        <div>
          <div className="register__form__checkbox">
            <input
              className="register__form__checkbox__input"
              type="checkbox"
              {...register("agreeCreate")}
            />
            <p className="register__form__checkbox__desc">
              By clicking "create account", I consent to the privacy policy.
            </p>
          </div>
          {!errors.firstName &&
            !errors.lastName &&
            !errors.userName &&
            !errors.password &&
            !errors.confirmPassword &&
            errors.agreeCreate && (
              <p className="register__form__message__policy">
                {errors.agreeCreate.message}
              </p>
            )}
        </div>
        <button className="register__form__btn">
          {isLoading ? (
            <div>
              <div className="register__form__btn__loading"></div> Loading...
            </div>
          ) : (
            "Create Account"
          )}
        </button>
      </form>
      <p className="register__form__agree">
        By creating an account, you agree to our:
      </p>
      <div className="register__form__conditions">
        <span>TERMS OF CONDITIONS</span>
        <span></span>
        <span>PRIVACY POLICY</span>
      </div>
      <NavLink to="/sign-in" className="register__form__link">
        ALREADY HAVE AN ACCOUNT ?
      </NavLink>
      {showMessage && <RegisterSuccess setShowMessage={setShowMessage} />}
    </div>
  );
}

export default RegisterForm;
