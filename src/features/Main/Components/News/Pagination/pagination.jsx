import React from "react";
import "./pagination.scss";

function Pagination({
  pageNumber,
  ClickChangePage,
  currentPage,
  nextPage,
  prevPage,
}) {
  return (
    <ul className="pagination">
      <li className="pagination__btn">
        {currentPage === 1 ? (
          <button
            className="pagination__disabled"
            style={{ marginRight: "15px" }}
          >
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
        ) : (
          <button className="pagination__btn__prev " onClick={prevPage}>
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
        )}
      </li>
      {pageNumber.map((item, index) => (
        <li
          className="pagination__item"
          key={index}
          onClick={() => ClickChangePage(item)}
        >
          <button
            className={
              currentPage === item
                ? "pagination__item__btn pagination__item__active"
                : "pagination__item__btn"
            }
          >
            {item}
          </button>
        </li>
      ))}
      {/* <li
        className="pagination__btn"
        style={{
          display: currentPage === pageNumber.length ? "none" : "flex",
        }}
      >
        <button className="pagination__btn__dots">...</button>
      </li> */}
      <li className="pagination__btn">
        {currentPage === pageNumber.length ? (
          <button className="pagination__disabled">
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
        ) : (
          <button className="pagination__btn__next" onClick={nextPage}>
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
        )}
      </li>
    </ul>
  );
}

export default Pagination;
