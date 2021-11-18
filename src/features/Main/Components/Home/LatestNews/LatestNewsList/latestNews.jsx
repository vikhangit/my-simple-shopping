import React, { useState } from "react";
import "./latestNews.scss";
import { useSelector } from "react-redux";
import LatestNewsItem from "../LatestNewsItem/latestNewsItem";
import ButtonSlider from "../ButtonSlider/buttonSlider";

function LatestNews() {
  const news = useSelector((state) => state.news);
  const [showControl, setShowControl] = useState(
    window.screen.width > 1024 ? false : true
  );
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(
    window.screen.width <= 1023 ? (window.screen.width >= 768 ? 2 : 1) : 3
  );
  const nextSlide = () => {
    setStart(end === news.length ? 0 : start + 1);
    setEnd(
      end === news.length
        ? window.screen.width <= 1023
          ? window.screen.width >= 768
            ? 2
            : 1
          : 3
        : end + 1
    );
  };
  const prevSlide = () => {
    setStart(
      start === 0
        ? news.length -
            (window.screen.width <= 1023
              ? window.screen.width >= 768
                ? 2
                : 1
              : 3)
        : start - 1
    );
    setEnd(start === 0 ? news.length : end - 1);
  };
  return (
    <div className="container">
      <section className="latest-news block">
        <h2 className="block__heading">latest news</h2>
        <div className="block__line"></div>
        <div
          className="latest-news__list"
          onMouseEnter={() => setShowControl(true)}
          onMouseLeave={() => setShowControl(false)}
        >
          {news.slice(start, end).map((item, index) => (
            <LatestNewsItem key={index} item={item} index={index} />
          ))}
          <ButtonSlider
            showControl={showControl}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          />
        </div>
      </section>
    </div>
  );
}

export default LatestNews;
