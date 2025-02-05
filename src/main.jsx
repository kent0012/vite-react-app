import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/unauthenticated/Home";

import "./index.css";
import Shop from "./pages/Shop";
import { Provider } from "react-redux";

import { store } from "./app/store";
import SinglePoduct from "./pages/SinglePoduct";
import Cart from "./pages/Cart";
import CheckoutPage from "./pages/CheckoutPage";
import Page404 from "./pages/Page404";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter basename="/vite-react-app">
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<SinglePoduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        <Route path="404-not-found" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404-not-found" />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
