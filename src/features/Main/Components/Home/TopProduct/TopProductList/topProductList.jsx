import React, { useState } from "react";
import "./topProductList.scss";
import { useDispatch, useSelector } from "react-redux";
import TopProductItem from "../TopProductItem/topProductItem";
import { Images } from "../../../../../../constants/images";
import { useHistory } from "react-router";
import { addToCart } from "../../../../../Slice-Reducer/cartSlice";
import AddToCartMSG from "../../../Message/AddToCart/addToCartMSG";
import ButtonSlider from "../ButtonSlider/buttonSlider";
import ProductMessage from "../../../Message/ProductMessage/productMessage";

function TopProductList() {
  const user = localStorage.getItem("user-login");
  const arrival = useSelector((state) => state.products);
  const [showControl, setShowControl] = useState(
    window.screen.width > 1024 ? false : true
  );
  const [showButton, setShowButton] = useState(
    window.screen.width > 1024 ? false : true
  );
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(
    window.screen.width <= 1023 ? (window.screen.width >= 768 ? 2 : 1) : 4
  );
  const [showMessage, setShowMessage] = useState(false);
  const [showDetailProduct, setShowDetailProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentLoading, setCurrentLoading] = useState(-1);
  const [info, setInfo] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const nextSlide = () => {
    setStart(end === arrival.length ? 0 : start + 1);
    setEnd(
      end === arrival.length
        ? window.screen.width <= 1023
          ? window.screen.width >= 768
            ? 2
            : 1
          : 4
        : end + 1
    );
  };
  const prevSlide = () => {
    setStart(
      start === 0
        ? arrival.length -
            (window.screen.width <= 1023
              ? window.screen.width >= 768
                ? 2
                : 1
              : 4)
        : start - 1
    );
    setEnd(start === 0 ? arrival.length : end - 1);
  };
  const onViewDetail = (id) => {
    const detailUrl = `/product-detail/${id}`;
    history.push(detailUrl);
  };
  const handleOnAddToCart = (product, number) => {
    if (user) {
      setIsLoading(true);
      setInfo(product);
      setCurrentLoading(number);
      setTimeout(() => {
        dispatch(addToCart(product));
        setShowMessage(true);
        setIsLoading(false);
      }, 2000);
    } else {
      history.push("/sign-in");
    }
  };
  const showDetailProductMessage = (product) => {
    setShowDetailProduct(true);
    setInfo(product);
  };
  const closeMessage = () => {
    setShowDetailProduct(false);
    setShowMessage(false);
    setShowControl(window.screen.width > 1024 ? false : true);
  };
  return (
    <div className="container">
      <section className="top-product block">
        <h2 className="block__heading">top product</h2>
        <div className="block__line"></div>
        <div
          className="top-product__list"
          onMouseEnter={() => setShowControl(true)}
          onMouseLeave={() => setShowControl(false)}
        >
          {arrival.slice(start, end).map((item, index) => (
            <TopProductItem
              key={index}
              item={item}
              index={index}
              showButton={showButton}
              currentIndex={currentIndex}
              setShowButton={setShowButton}
              setCurrentIndex={setCurrentIndex}
              onViewDetail={onViewDetail}
              handleOnAddToCart={handleOnAddToCart}
              isLoading={isLoading}
              currentLoading={currentLoading}
              showDetailProductMessage={showDetailProductMessage}
            />
          ))}
          <ButtonSlider
            showControl={showControl}
            prevSlide={prevSlide}
            nextSlide={nextSlide}
          />
        </div>
        <div className="top-product__banner">
          <img src={Images.Banner6} alt={Images.Banner6} />
        </div>
        {showMessage && (
          <AddToCartMSG
            info={info}
            setShowMessage={setShowMessage}
            closeMessage={closeMessage}
          />
        )}
        {showDetailProduct && (
          <ProductMessage info={info} closeMessage={closeMessage} />
        )}
      </section>
    </div>
  );
}

export default TopProductList;
