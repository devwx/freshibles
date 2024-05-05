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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
