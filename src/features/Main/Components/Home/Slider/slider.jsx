import React, { useState } from "react";
import "./slider.scss";
import { NavLink } from "react-router-dom";
import { slideData } from "./data";

function Slider() {
  const [showButton, setShowButton] = useState(false);
  const [current, setCurrent] = useState(1);
  const length = slideData.length;
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  //   }, 5000);
  // }, [current, length]);
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
  return (
    <section
      className="slider"
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      {slideData.map(
        (item, index) =>
          current === index && (
            <div className="slider-item" key={index}>
              <div className="slider__image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="slider__info">
                <h1 className="slider__title">{item.title}</h1>
                <h3 className="slider__sub-title">{item.subtitle}</h3>
                <div className="slider__line"></div>
                <p className="slider__desc">{item.description}</p>
                <NavLink className="slider__link" to="/shop">
                  Shop Now
                </NavLink>
              </div>
              {showButton && (
                <div className="slider__tool" onClick={prevSlide}>
                  <button className="slider__tool__left">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                      />
                    </svg>
                  </button>
                  <button className="slider__tool__right" onClick={nextSlide}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-chevron-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )
      )}
    </section>
  );
}

export default Slider;
