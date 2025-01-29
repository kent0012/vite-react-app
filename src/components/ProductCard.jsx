import { NavLink } from "react-router-dom";
import ButtonCart from "./ButtonCart";
import ProductRatings from "./ProductRatings";

const ProductCard = ({ data }) => {
  return (
    <>
      {data.length === 0 ? (
        <p className="text-center text-lg text-semibold mt-20">
          No Product Found
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((product) => (
            <div
              className="shadow hover:shadow-lg duration-500 rounded-md overflow-hidden flex flex-col items-start justify-center p-4"
              key={product.id}
            >
              <figure className="w-full aspect-[4/3] flex items-center justify-center">
                <NavLink to={`/product/${product.id}`}>
                  <img
                    className="w-full h-full object-cover"
                    src={product.product_image}
                    alt={product.product_name}
                    loading="lazy"
                  />
                </NavLink>
              </figure>
              <div className="text-lg font-semibold mt-2">
                {product.product_name}
              </div>
              <div className="flex items-center w-full justify-between">
                <ProductRatings productRatings={product.product_rating} />
                <span className="text-lg font-semibold text-gray-500">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(product.product_price)}
                </span>
              </div>
              <div className="flex items-center w-full justify-between mt-3">
                <ButtonCart
                  quantityCount={1}
                  btnName="Add to Cart"
                  isDisabled={product.product_stocks <= 5 ? "disabled" : ""}
                  productId={product.id}
                />

                <NavLink
                  className="text-xm text-gray-500 hover:underline duration-500"
                  to={`/product/${product.id}`}
                >
                  View
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ProductCard;
