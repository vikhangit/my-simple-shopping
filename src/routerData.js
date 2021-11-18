import NotFound from "./components/NotFound/notFound";
import Cart from "./features/Main/Pages/Cart/cart";
import Contact from "./features/Main/Pages/Contact/contact";
import HomePage from "./features/Main/Pages/Home";
import News from "./features/Main/Pages/News/news";
import Pages from "./features/Main/Pages/Pages/pages";
import Portfolio from "./features/Main/Pages/Portfolio/portfolio";
import ProductDetail from "./features/Main/Pages/ProductDetail/productDetail";
import Register from "./features/Main/Pages/Register/register";
import Shop from "./features/Main/Pages/Shop/shop";
import SignIn from "./features/Main/Pages/SignIn/signIn";

export const router = [
  {
    id: 1,
    path: "/",
    component: HomePage,
  },
  {
    id: 2,
    path: "/pages",
    component: Pages,
  },
  {
    id: 3,
    path: "/shop",
    component: Shop,
  },
  {
    id: 4,
    path: "/portfolio",
    component: Portfolio,
  },
  {
    id: 5,
    path: "/news",
    component: News,
  },
  {
    id: 6,
    path: "/contact",
    component: Contact,
  },
  {
    id: 7,
    path: "/product-detail/:id",
    component: ProductDetail,
  },
  {
    id: 8,
    path: "/cart",
    component: Cart,
  },
  {
    id: 9,
    path: "/sign-in",
    component: SignIn,
  },
  {
    id: 8,
    path: "/register",
    component: Register,
  },
  {
    id: 9,
    path: "",
    component: NotFound,
  },
];
