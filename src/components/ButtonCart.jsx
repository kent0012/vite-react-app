import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCart } from "../feautures/cart/CartSlice";
import { selectProducts } from "../feautures/products/ProductSlice";
const ButtonCart = ({
  btnName,
  isDisabled,
  className,
  productId,
  quantityCount,
}) => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCart);

  const handleAddToCart = () => {
    const product = products.find((p) => p.id === productId);
    if (!product) return;

    if (product.product_stocks <= 0) {
      alert("Out of stock");
      return;
    }

    const cartItem = cart.find((item) => item.product_id === productId);
    const currentQuantity = cartItem ? cartItem.quantity : 0;

    if (currentQuantity + Number(quantityCount) > product.product_stocks) {
      alert("Not enough stock available");
      return;
    }

    dispatch(
      addToCart({ product_id: productId, quantity: Number(quantityCount) })
    );
  };

  return (
    <button
      onClick={handleAddToCart}
      className={`bg-sky-500 border border-solid  text-sm border-sky-500 duration-500 font-[Poppins] py-1 px-3 text-white rounded hover:bg-sky-400  ${className} ${
        isDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      {btnName}
    </button>
  );
};

export default ButtonCart;
