import React from "react";
import "./banner.scss";
import { NavLink } from "react-router-dom";
import { Images } from "../../../../../constants/images";

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <ul className="banner__list">
          <li className="banner__item">
            <NavLink to="/" className="banner__link">
              <img
                className="banner__image"
                src={Images.Banner1}
                alt={"Banner1"}
              />
            </NavLink>
          </li>
          <li className="banner__item">
            <NavLink to="/" className="banner__link">
              <img
                className="banner__image"
                src={Images.Banner2}
                alt={"Banner2"}
              />
            </NavLink>
          </li>
          <li className="banner__item">
            <NavLink to="/" className="banner__link">
              <img
                className="banner__image"
                src={Images.Banner3}
                alt={"Banner2"}
              />
            </NavLink>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Banner;
