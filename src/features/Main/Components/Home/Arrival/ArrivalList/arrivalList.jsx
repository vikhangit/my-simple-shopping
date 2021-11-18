import React, { useState } from "react";
import "./arrival.scss";
import { useDispatch, useSelector } from "react-redux";
import ArrivalItem from "../ArrivalItem/arrivalItem";
import ArrivalBanner from "../ArrivalBanner/arrivalBanner";
import { useHistory } from "react-router";
import { addToCart } from "../../../../../Slice-Reducer/cartSlice";
import AddToCartMSG from "../../../Message/AddToCart/addToCartMSG";
import ProductMessage from "../../../Message/ProductMessage/productMessage";

function ArrivalList() {
  const arrival = useSelector((state) => state.products);
  const user = localStorage.getItem("user-login");
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(
    window.screen.width > 1024 ? false : true
  );
  const [showMessage, setShowMessage] = useState(false);
  const [showDetailProduct, setShowDetailProduct] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState();
  const [currentLoading, setCurrentLoading] = useState(-1);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const history = useHistory();
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
  };
  return (
    <div className="container">
      <section className="arrival block">
        <h2 className="block__heading">new arrival items</h2>
        <div className="block__line"></div>
        <div className="arrival__list">
          {arrival.map((item, index) => (
            <ArrivalItem
              key={index}
              item={item}
              index={index}
              currentLoading={currentLoading}
              showButton={showButton}
              currentIndex={currentIndex}
              setShowButton={setShowButton}
              setCurrentIndex={setCurrentIndex}
              onViewDetail={onViewDetail}
              handleOnAddToCart={handleOnAddToCart}
              isLoading={isLoading}
              showDetailProductMessage={showDetailProductMessage}
            />
          ))}
        </div>
        {showMessage && (
          <AddToCartMSG info={info} setShowMessage={setShowMessage} />
        )}
        {showDetailProduct && (
          <ProductMessage info={info} closeMessage={closeMessage} />
        )}
        <ArrivalBanner />
      </section>
    </div>
  );
}

export default ArrivalList;
