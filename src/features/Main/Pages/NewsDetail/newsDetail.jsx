import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import NewsDetailInfo from "../../Components/NewsDetail/newsDetailInfo";

function NewsDetail() {
  const { id } = useParams();
  const news = useSelector((state) => {
    const findNews = state.news.find((x) => x.id === parseInt(id));
    return findNews;
  });
  return (
    <section className="news-detail">
      <div className="page">
        <h2 className="page__title">News</h2>
        <div className="page__breadcrumb">
          <NavLink to="/" className="page__breadcrumb__link">
            Home
          </NavLink>
          <p>News Detail</p>
        </div>
      </div>
      <div className="container">
        <NewsDetailInfo news={news} />
      </div>
    </section>
  );
}

export default NewsDetail;
