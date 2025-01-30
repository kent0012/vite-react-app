import React, { useEffect, useState } from "react";
import UnAuthenticatedLayout from "../layouts/UnAuthenticatedLayout";
import { Helmet } from "react-helmet";
import { useNavigate, NavLink } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import ButtonFilled from "../components/ButtonFilled";

import { useSelector, useDispatch } from "react-redux";
import { selectCart, clearCart } from "../feautures/cart/CartSlice";
import { selectProducts } from "../feautures/products/ProductSlice";
import InputField from "../components/InputField";

const CheckoutPage = () => {
  const [InputFieldValue, setInputFieldValue] = useState({
    fullname: "",
    card_number: "",
    expiry_date: "",
    cvv: "",
  });

  const [totalSum, setTotalSum] = useState(0);
  const cart = useSelector(selectCart);
  const products = useSelector(selectProducts);

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      const product = products.find(
        (product) => product.id === item.product_id
      );
      return acc + product.product_price * item.quantity;
    }, 0);
    setTotalSum(total);
  }, [cart, products]);

  const handleInputValueChange = (e) => {
    setInputFieldValue((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleCheckout = () => {
    alert("Thank you for shopping with us. Your order has been placed.");
    dispatch(clearCart());

    Navigate("/shop");
  };

  return (
    <UnAuthenticatedLayout>
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <PageBanner bannerTitle="Checkout" />
      <section className="max-w-5xl mx-auto py-8 grid grid-cols-1 md:grid-cols-[65%_1fr] gap-4 p-4 ">
        <div className="shadow p-4 rounded-lg bg-white">
          <h2 className="text-2xl md:text-3xl font-[Poppins]">
            Card Information
          </h2>
          <fieldset className="flex items-center justify-between md:flex-row flex-col md:gap-2">
            <InputField
              onChange={handleInputValueChange}
              value={InputFieldValue.fullname}
              id="fullname"
              label="Fullname (as displayed on card)"
              type="text"
            />
            <InputField
              onChange={handleInputValueChange}
              value={InputFieldValue.card_number}
              id="card_number"
              label="Card Number"
              type="number"
            />
          </fieldset>
          <fieldset className="flex items-center justify-between md:flex-row flex-col md:gap-2">
            <InputField
              onChange={handleInputValueChange}
              value={InputFieldValue.expiry_date}
              id="expiry_date"
              label="Expiry Date"
              type="date"
            />
            <InputField
              onChange={handleInputValueChange}
              value={InputFieldValue.cvv}
              id="cvv"
              label="CVV"
              type="password"
            />
          </fieldset>

          <ButtonFilled
            isDisabled={
              !InputFieldValue.fullname ||
              !InputFieldValue.card_number ||
              !InputFieldValue.expiry_date ||
              !InputFieldValue.cvv ||
              cart.length === 0
            }
            onClick={handleCheckout}
            className="w-full mt-5"
            btnName="Pay Now"
          />
        </div>
        <div className="mb-5 shadow p-4 rounded-lg bg-white">
          <h2 className="text-2xl md:text-3xl font-[Poppins]">Summary</h2>

          <div className="flex items-center justify-between flex-col gap-2 w-full mt-5 rounded-lg bg-white">
            <div className="flex items-center justify-between w-full">
              <h3 className="text-lg">Total Amount:</h3>
              <p className="text-lg text-gray-500">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(totalSum)}
              </p>
            </div>
            <div className="flex items-center justify-between w-full">
              <h3 className="text-lg">Delivery Fee:</h3>
              <p className="text-lg text-gray-500">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(0)}
              </p>
            </div>
            <div className="flex items-center justify-between w-full">
              <h3 className="text-lg">Total Tax:</h3>
              <p className="text-lg text-gray-500">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(0)}
              </p>
            </div>
            <hr className="w-full border-t-1 border-gray-300 my-5" />
            <div className="flex items-center justify-between w-full">
              <h3 className="text-lg">Total:</h3>
              <p className="text-lg text-gray-500">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(totalSum)}
              </p>
            </div>
            <hr className="w-full border-t-1 border-gray-300 my-5" />
            <div className="flex items-center justify-end w-full">
              <NavLink
                className="text-xm text-gray-500 hover:underline duration-500"
                to="/shop"
              >
                Shop More
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </UnAuthenticatedLayout>
  );
};

export default CheckoutPage;
