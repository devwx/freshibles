import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AboutUs from "./pages/AboutUs.jsx";
import ServicePage from "./pages/Services.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import ShopPage from "./pages/Shop.jsx";
import HomePage from "./pages/HomePage.jsx";
import RegisterPage from "./pages/Register.jsx";
import Recover from "./pages/Recover.jsx";
import CartPage from "./pages/Cart.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ProductDetail from "./pages/ProductDetail.jsx";
import ResetPassword from "./pages/ResetPassword.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/services",
        element: <ServicePage />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/recover",
        element: <Recover />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetail />,
      },
      {
        path: "/reset-password/:token",
        element: <ResetPassword />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
