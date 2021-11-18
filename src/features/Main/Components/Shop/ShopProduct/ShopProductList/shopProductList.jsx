import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../../../../../Slice-Reducer/cartSlice";
import AddToCartMSG from "../../../Message/AddToCart/addToCartMSG";
import ShopProductItem from "../ShopProductItem/shopProductItem";
import "./shopProductList.scss";

function ShopProductList({ arrival, currentPage, productPerPage }) {
  const user = localStorage.getItem("user-login");
  const dispatch = useDispatch();
  const [showButton, setShowButton] = useState(
    window.screen.width > 1024 ? false : true
  );
  const [showMessage, setShowMessage] = useState(false);
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

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;

  return (
    <div>
      <div className="shop__product">
        {arrival
          .slice(indexOfFirstProduct, indexOfLastProduct)
          .map((item, index) => (
            <ShopProductItem
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
            />
          ))}
        {showMessage && (
          <AddToCartMSG info={info} setShowMessage={setShowMessage} />
        )}
      </div>
    </div>
  );
}

export default ShopProductList;
