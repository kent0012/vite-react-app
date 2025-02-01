import React, { useEffect, useState } from "react";
import UnAuthenticatedLayout from "../layouts/UnAuthenticatedLayout";
import { Helmet } from "react-helmet";
import { useNavigate, NavLink } from "react-router-dom";
import PageBanner from "../components/PageBanner";
import ButtonFilled from "../components/ButtonFilled";

import { useSelector, useDispatch } from "react-redux";
import { selectCart, clearCart } from "../feautures/cart/CartSlice";
import { selectProducts } from "../feautures/products/ProductSlice";
import CartSummary from "../components/CartSummary";
import CardInformation from "../components/CardInformation";

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
          <CardInformation
            handleInputValueChange={handleInputValueChange}
            InputFieldValue={InputFieldValue}
            fields={[
              {
                id: "fullname",
                label: "Fullname (as displayed on card)",
                type: "text",
              },
              { id: "card_number", label: "Card Number", type: "number" },
            ]}
          />

          <CardInformation
            handleInputValueChange={handleInputValueChange}
            InputFieldValue={InputFieldValue}
            fields={[
              {
                id: "expiry_date",
                label: "Expiry Date)",
                type: "date",
              },
              { id: "cvv", label: "CVV", type: "password", pattern: true },
            ]}
          />

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
            <CartSummary totalSum={totalSum} label="Total Amount:" />
            <CartSummary totalSum={0} label="Delivery Fee:" />
            <CartSummary totalSum={0} label="Total Tax:" />
            <hr className="w-full border-t-1 border-gray-300 my-5" />
            <CartSummary totalSum={totalSum} label="Total:" />
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
