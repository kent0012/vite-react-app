import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/unauthenticated/Home";

import "./index.css";
import Shop from "./pages/Shop";
import { Provider } from "react-redux";

import { store } from "./app/store";
import SinglePoduct from "./pages/SinglePoduct";
import Cart from "./pages/Cart";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter basename="/ecommerce-app">
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:id" element={<SinglePoduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);
