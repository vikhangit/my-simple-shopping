import React from "react";
import Slider from "../../Components/Home/Slider/slider";
import Feature from "../../Components/Home/Feature/feature";
import Banner from "../../Components/Home/Banner/banner";
import TopProductList from "../../Components/Home/TopProduct/TopProductList/topProductList";
import LatestNews from "../../Components/Home/LatestNews/LatestNewsList/latestNews";
import ArrivalList from "../../Components/Home/Arrival/ArrivalList/arrivalList";

function HomePage() {
  return (
    <div>
      <Slider />
      <Feature />
      <Banner />
      <ArrivalList />
      <TopProductList />
      <LatestNews />
    </div>
  );
}

export default HomePage;
