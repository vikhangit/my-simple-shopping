import React, { useRef, useState } from "react";
import "./shopControl.scss";
import { dataSelect } from "../Data/dataSelect";

function ShopControl({
  productPerPage,
  arrival,
  keyWord,
  onSearchWithKeyword,
  sortBy,
}) {
  const [dropDown, setDropDown] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef("");
  const handleSearch = () => {
    onSearchWithKeyword(ref.current.value);
  };
  return (
    <div className="shop__control">
      <div className="shop__control__search">
        <div className="shop__control__search__tool">
          <input
            type="text"
            placeholder="Enter key word..."
            className="shop__control__search__input"
            ref={ref}
            value={keyWord}
            onChange={handleSearch}
          />
          <span className="shop__control__search__btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
        </div>
        <p className="shop__control__search__result">
          Showing{" "}
          {arrival.length > productPerPage ? productPerPage : arrival.length} of{" "}
          {arrival.length} result
        </p>
      </div>
      <div className="shop__control__tool">
        <div
          className="shop__control__dropdown"
          onClick={() => setDropDown(!dropDown)}
        >
          {dataSelect.map(
            (item, index) =>
              currentIndex === index && (
                <li
                  className="shop__control__dropdown__item--active"
                  key={index}
                  value={item.value}
                >
                  {item.label}
                </li>
              )
          )}
          <ul className="shop__control__dropdown__list">
            {dataSelect.map(
              (item, index) =>
                dropDown && (
                  <li
                    className="shop__control__dropdown__item"
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      sortBy(item.value);
                    }}
                    value={item.value}
                  >
                    {item.label}
                  </li>
                )
            )}
          </ul>
          <span
            onClick={() => setDropDown(!dropDown)}
            className="shop__control__dropdown__btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              className="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ShopControl;
