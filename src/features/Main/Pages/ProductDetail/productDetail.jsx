import React, { useState } from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ProductDetailTabs from "../../Components/ProductDetail/ProductDetailTabs/Main/productDetailTabs";
import { addToCart } from "../../../Slice-Reducer/cartSlice";
import AddToCartMSG from "../../Components/Message/AddToCart/addToCartMSG";
import ProductDetailContent from "../../Components/ProductDetail/ProductDetailContent/Main/productDetailContent";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => {
    const findProduct = state.products.find((x) => x.id === parseInt(id));
    return findProduct;
  });
  const user = localStorage.getItem("user-login");
  const rating = [];
  for (let i = 1; i <= product.rating; i++) {
    rating.push(i);
  }
  const history = useHistory();
  const [showMessage, setShowMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState();
  const [desc, setDesc] = useState(true);
  const [review, setReview] = useState(false);
  const [shipping, setShipping] = useState(false);
  const handleOnAddToCart = (product) => {
    if (user) {
      setIsLoading(true);
      setInfo(product);
      setTimeout(() => {
        dispatch(addToCart(product));
        setShowMessage(true);
        setIsLoading(false);
      }, 2000);
    } else {
      history.push("/sign-in");
    }
  };
  const closeMessage = () => {
    setShowMessage(false);
  };
  return (
    <section className="product-detail">
      <div className="page">
        <h2 className="page__title">Product Detail</h2>
        <div className="page__breadcrumb">
          <NavLink to="/" className="page__breadcrumb__link">
            Home
          </NavLink>
          <p>Product Detail</p>
        </div>
      </div>
      <div className="container">
        <ProductDetailContent
          product={product}
          rating={rating}
          handleOnAddToCart={handleOnAddToCart}
          isLoading={isLoading}
        />

        <ProductDetailTabs
          product={product}
          rating={rating}
          shipping={shipping}
          setShipping={setShipping}
          review={review}
          setReview={setReview}
          desc={desc}
          setDesc={setDesc}
        />
      </div>
      {showMessage && (
        <AddToCartMSG
          info={info}
          setShowMessage={setShowMessage}
          closeMessage={closeMessage}
        />
      )}
    </section>
  );
}

export default ProductDetail;
