import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.scss";
import Brand from "./components/Brand/brand";
import ButtonScollTop from "./components/ButtonScollTop/ButtonScollTop";
import Footer from "./components/Footer/MainFooter/footer";
import Header from "./components/Header/Header/header";
import NotFound from "./components/NotFound/notFound";
import Cart from "./features/Main/Pages/Cart/cart";
import Contact from "./features/Main/Pages/Contact/contact";
import HomePage from "./features/Main/Pages/Home";
import MyAccount from "./features/Main/Pages/MyAccount/MyAccount";
import News from "./features/Main/Pages/News/news";
import Pages from "./features/Main/Pages/Pages/pages";
import Portfolio from "./features/Main/Pages/Portfolio/portfolio";
import ProductDetail from "./features/Main/Pages/ProductDetail/productDetail";
import Register from "./features/Main/Pages/Register/register";
import Shop from "./features/Main/Pages/Shop/shop";
import SignIn from "./features/Main/Pages/SignIn/signIn";
import NewsDetail from "./features/Main/Pages/NewsDetail/newsDetail";

function App() {
  const [boxCart, setBoxCart] = useState(false);
  const user = JSON.parse(localStorage.getItem("user-login"));
  return (
    <div className="app">
      <BrowserRouter>
        <Header boxCart={boxCart} setBoxCart={setBoxCart} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/pages" component={Pages} />
          <Route path="/shop" component={Shop} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
          <Route path="/product-detail/:id" component={ProductDetail} />
          <Route path="/sign-in" component={SignIn} />
          {user ? (
            <Route path="/cart" component={Cart} />
          ) : (
            <Redirect from="/cart" to="/sign-in" />
          )}
          <Route path="/register" component={Register} />
          <Route path="/my-account" component={MyAccount} />
          <Route path="/news-detail/:id" component={NewsDetail} />
          <Route component={NotFound} />
        </Switch>
        <Brand />
        <Footer />
        {boxCart ? "" : <ButtonScollTop />}
      </BrowserRouter>
    </div>
  );
}

export default App;
