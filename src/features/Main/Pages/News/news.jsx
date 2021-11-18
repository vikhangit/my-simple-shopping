import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ListNews from "../../Components/News/ListNews/listNews";
import Pagination from "../../Components/News/Pagination/pagination";

function News() {
  const news = useSelector((state) => state.news);
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 3;
  const pageNumber = [];
  const totalPages = Math.ceil(news.length / newsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }
  const ClickChangePage = (number) => {
    setCurrentPage(number);
  };

  const nextPage = () => {
    setCurrentPage(
      currentPage === pageNumber.length ? pageNumber.length : currentPage + 1
    );
  };
  const prevPage = () => {
    setCurrentPage(currentPage === 1 ? 1 : currentPage - 1);
  };
  return (
    <section className="news">
      <div className="page">
        <h2 className="page__title">News</h2>
        <div className="page__breadcrumb">
          <NavLink to="/" className="page__breadcrumb__link">
            Home
          </NavLink>
          <p>News</p>
        </div>
      </div>
      <div className="container">
        <ListNews
          news={news}
          currentPage={currentPage}
          newsPerPage={newsPerPage}
        />
        <Pagination
          pageNumber={pageNumber}
          currentPage={currentPage}
          ClickChangePage={ClickChangePage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </section>
  );
}

export default News;
