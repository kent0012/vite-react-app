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
import CartSummary from "../components/CartSummary";
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
            <CartSummary totalSum={totalSum} label="Total Amount:" />
            <CartSummary totalSum={0} label="Delivery Fee:" />
            <CartSummary totalSum={0} label="Total Tax:" />
            <hr className="w-full border-t-1 border-gray-300 my-5" />
            <CartSummary totalSum={totalSum} label="Total Sum:" />
            <hr className="w-full border-t-1 border-gray-300 my-5" />
            <div className="flex items-center justify-between w-full">
              <ButtonFilled
                isDisabled={cart.length === 0}
                btnName="Checkout"
                type="button"
                onClick={() => Navigate("/checkout")}
              />
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

export default Cart;
