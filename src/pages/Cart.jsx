import Helmet from "react-helmet";
import UnAuthenticatedLayout from "../layouts/UnAuthenticatedLayout";
import PageBanner from "../components/PageBanner";
import CartProductList from "../components/CartProductList";

import { useSelector, useDispatch } from "react-redux";
import { selectCart, clearCart } from "../feautures/cart/CartSlice";
import { selectProducts } from "../feautures/products/ProductSlice";
import { useEffect } from "react";
import { useState } from "react";
import ButtonFilled from "../components/ButtonFilled";
import { NavLink, useNavigate } from "react-router-dom";
const Cart = () => {
  const [totalSum, setTotalSum] = useState(0);

  const cart = useSelector(selectCart);
  const products = useSelector(selectProducts);

  const Navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      const product = products.find(
        (product) => product.id === item.product_id
      );
      return acc + product.product_price * item.quantity;
    }, 0);
    setTotalSum(total);
  });

  const handleCheckout = () => {
    alert(
      "Thank you for shopping with us, This is a demo site only! Stay Safe"
    );

    dispatch(clearCart());

    // Redirect to home page
    Navigate("/");
  };

  return (
    <UnAuthenticatedLayout>
      <Helmet>
        <title>Ecommerce | Cart</title>
      </Helmet>
      <PageBanner bannerTitle="Cart" />
      <section className="max-w-7xl mx-auto py-8 grid grid-cols-1 md:grid-cols-[70%_1fr] gap-4 p-4 ">
        <div className="mb-5 shadow p-4 rounded-lg bg-white">
          <div className="mb-5 rounded-lg bg-white flex items-center justify-between">
            <h2 className="text-2xl md:text-3xl font-[Poppins]">Cart List</h2>
            {/* <button
              onClick={() => dispatch(clearCart())}
              className={`bg-red-800 border border-solid border-red-8 duration-500 font-[Poppins] py-2 px-4 text-white rounded hover:bg-red-700  ${
                cart.length === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "cursor-pointer"
              }`}
            >
              Clear Cart
            </button> */}
            <ButtonFilled
              isDisabled={cart.length === 0}
              btnName="Clear Cart"
              onClick={() => dispatch(clearCart())}
              bgColor="bg-red-800"
              hoverBgColor="hover:bg-red-700"
              borderColor="border-red-800"
            />
          </div>
          <div className="flex items-center justify-between flex-col gap-5 w-full rounded-lg bg-white">
            <CartProductList />
          </div>
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
            <div className="flex items-center justify-between w-full">
              <ButtonFilled
                isDisabled={cart.length === 0}
                btnName="Checkout"
                type="button"
                onClick={handleCheckout}
              />
              <NavLink
                className="text-xm text-gray-500 hover:underline duration-500"
                to="/shop"
              >
                Continue Shopping
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </UnAuthenticatedLayout>
  );
};

export default Cart;
