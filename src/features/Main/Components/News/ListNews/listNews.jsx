import React from "react";
import "./listNews.scss";
import ItemNews from "../ItemNews/itemNews";

function ListNews({ news, currentPage, newsPerPage }) {
  const indexOfLastProduct = currentPage * newsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - newsPerPage;

  return (
    <div>
      <div className="news-list">
        {news
          .slice(indexOfFirstProduct, indexOfLastProduct)
          .map((item, index) => (
            <ItemNews key={index} item={item} index={index} />
          ))}
      </div>
    </div>
  );
}

export default ListNews;
