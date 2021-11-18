import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ShopControl from "../../Components/Shop/ShopControl/shopControl";
import Pagination from "../../Components/Shop/ShopProduct/Pagination/pagination";
import ShopProductList from "../../Components/Shop/ShopProduct/ShopProductList/shopProductList";

function Shop() {
  const product = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const [arrival, setArrival] = useState(product);
  const [currentPage, setCurrentPage] = useState(1);
  const [keyWord, setKeyword] = useState("");
  const [resultSearch, setResultSearch] = useState([]);
  const productPerPage = 4;
  const pageNumber = [];
  const totalPages = Math.ceil(
    keyWord.length < 1
      ? arrival.length / productPerPage
      : resultSearch.length / productPerPage
  );
  for (let i = 1; i <= totalPages; i++) {
    pageNumber.push(i);
  }
  const ClickChangePage = (number) => {
    setCurrentPage(number);
  };

  const nextPage = () => {
    setCurrentPage(
      currentPage === pageNumber.length ? pageNumber.length : currentPage + 1
    );
  };
  const prevPage = () => {
    setCurrentPage(currentPage === 1 ? 1 : currentPage - 1);
  };
  const onSearchWithKeyword = (keyword) => {
    setKeyword(keyword);
    if (keyword !== "") {
      const search = product.filter((x) =>
        x.name.toLowerCase().includes(keyword.toLowerCase())
      );
      setResultSearch(search);
    } else {
      setResultSearch(product);
    }
  };
  const sortBy = (value) => {
    switch (value) {
      case 1: {
        const sort = [...product].sort((a, b) => a.id - b.id);
        setArrival(sort);
        break;
      }
      case 2: {
        const sort = [...cart].sort((a, b) => b.quantities - a.quantities);
        setArrival(sort);
        break;
      }
      case 3: {
        const sort = [...product].sort((a, b) => b.id - a.id);
        setArrival(sort);
        break;
      }
      case 4: {
        const sort = [...product].sort((a, b) => a.price - b.price);
        setArrival(sort);
        break;
      }
      case 5: {
        const sort = [...product].sort((a, b) => b.price - a.price);
        setArrival(sort);
        break;
      }
      default:
        break;
    }
  };

  return (
    <section className="shop">
      <div className="page">
        <h2 className="page__title">Shops</h2>
        <div className="page__breadcrumb">
          <NavLink to="/" className="page__breadcrumb__link">
            Home
          </NavLink>
          <p>Shops</p>
        </div>
      </div>
      <div className="container">
        <ShopControl
          productPerPage={productPerPage}
          arrival={keyWord.length < 1 ? arrival : resultSearch}
          onSearchWithKeyword={onSearchWithKeyword}
          keyWord={keyWord}
          setKeyword={setKeyword}
          sortBy={sortBy}
        />
        <ShopProductList
          arrival={keyWord.length < 1 ? arrival : resultSearch}
          currentPage={currentPage}
          productPerPage={productPerPage}
        />
        <Pagination
          pageNumber={pageNumber}
          currentPage={currentPage}
          ClickChangePage={ClickChangePage}
          nextPage={nextPage}
          prevPage={prevPage}
        />
      </div>
    </section>
  );
}

export default Shop;
