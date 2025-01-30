import { useSelector, useDispatch } from "react-redux";
import {
  selectCart,
  removeFromCart,
  updateQuantity,
} from "../feautures/cart/CartSlice";
import { selectProducts } from "../feautures/products/ProductSlice";
import { useState } from "react";

const CartProductList = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const products = useSelector(selectProducts);

  // Initialize state with cart quantities
  const [quantities, setQuantities] = useState(
    cart.reduce(
      (acc, item) => ({ ...acc, [item.product_id]: item.quantity }),
      {}
    )
  );

  // Update local and global state for quantity
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return; // Prevent negative or zero quantity
    setQuantities((prev) => ({ ...prev, [productId]: newQuantity }));
    dispatch(updateQuantity({ product_id: productId, quantity: newQuantity }));
  };

  // Filter cart items based on product data
  const cartItems = products.filter((product) =>
    cart.some((item) => item.product_id === product.id)
  );

  return (
    <>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-500">No Item Found</p>
      ) : (
        cartItems.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between p-3 shadow rounded-lg bg-white w-full hover:shadow-md duration-500"
          >
            <div className="flex items-center space-x-4">
              <figure className="w-20 h-20 md:w-24 md:h-24 shadow ratio-1:1">
                <picture>
                  <img
                    className="w-full h-full object-cover"
                    src={product.product_image}
                    alt={product.product_name}
                  />
                </picture>
              </figure>
              <div>
                <h3 className="font-semibold md:text-lg text-sm">
                  {product.product_name}
                </h3>
                <p className="text-gray-700 text-sm">
                  Price:{" "}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(product.product_price)}
                </p>
                <p className="text-gray-400 text-sm">
                  Total:{" "}
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(
                    product.product_price * (quantities[product.id] || 1)
                  )}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 justify-center">
              <div className="flex items-center gap-4">
                <button
                  onClick={() =>
                    handleUpdateQuantity(
                      product.id,
                      (quantities[product.id] || 1) - 1
                    )
                  }
                  className="text-gray-500 bg-gray-100 px-3 rounded cursor-pointer"
                >
                  -
                </button>
                <p>{quantities[product.id] || 1}</p>
                <button
                  onClick={() =>
                    handleUpdateQuantity(
                      product.id,
                      (quantities[product.id] || 1) + 1
                    )
                  }
                  className="text-gray-500 bg-gray-100 px-3 rounded cursor-pointer"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => dispatch(removeFromCart(product.id))}
                className="text-red-800 hover:text-red-700 duration-500"
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default CartProductList;
