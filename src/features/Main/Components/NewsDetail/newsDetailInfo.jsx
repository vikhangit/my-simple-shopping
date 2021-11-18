import React from "react";
import "./newsDetail.scss";

function NewsDetailInfo({ news }) {
  return (
    <div className="news-detail__info">
      <h2 className="news-detail__info__title">{news.title}</h2>
      <p className="news-detail__info__date">{news.postDate}</p>
      <img
        className="news-detail__info__image"
        src={news.image}
        alt={news.title}
      />
      <p className="news-detail__info__desc">{news.desc}</p>
    </div>
  );
}

export default NewsDetailInfo;
