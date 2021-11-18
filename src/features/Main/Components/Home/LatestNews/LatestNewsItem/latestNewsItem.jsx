import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { clickViewNews } from "../../../../../Slice-Reducer/newsSlice";
import "./latestNewsItem.scss";

function LatestNewsItem({ item }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const onViewDetail = (data) => {
    dispatch(clickViewNews(data));
    history.push(`/news-detail/${data.id}`);
  };
  return (
    <div className="latest-news__item">
      <div className="latest-news__top">
        <img
          onClick={() => onViewDetail(item)}
          src={item.image}
          alt={item.name}
          className="latest-news__image"
        />
      </div>
      <div className="latest-news__info">
        <div className="latest-news__post">
          <p className="latest-news__date">{item.postDate}</p>
          <div className="latest-news__view">
            <p className="latest-news__view__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-chat-left-text"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
              </svg>
            </p>
            <p className="latest-news__view__number">{item.views}</p>
          </div>
        </div>
        <h3 onClick={() => onViewDetail(item)} className="latest-news__title">
          {item.title}
        </h3>
      </div>
      <div className="latest-news__line"></div>
    </div>
  );
}

export default LatestNewsItem;
