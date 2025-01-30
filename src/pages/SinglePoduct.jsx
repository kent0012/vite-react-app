import PageBanner from "../components/PageBanner";
import UnAuthenticatedLayout from "../layouts/UnAuthenticatedLayout";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProducts } from "../feautures/products/ProductSlice";
import { Helmet } from "react-helmet";
import ProductRatings from "../components/ProductRatings";
import ButtonCart from "../components/ButtonCart";
import { useState } from "react";

import ProductCounter from "../components/ProductCounter";

const SingleProduct = () => {
  const [productQuantity, setProductQuantity] = useState(1);

  const { id } = useParams();
  const products = useSelector(selectProducts);

  const product = products.find((product) => product.id === Number(id));

  // Handle case when product is not found
  if (!product) {
    return (
      <UnAuthenticatedLayout>
        <div className="text-center py-10">
          <h2 className="text-2xl font-semibold text-red-600">
            Product Not Found
          </h2>
        </div>
      </UnAuthenticatedLayout>
    );
  }

  const handleQuantityChange = (newQuantity) => {
    setProductQuantity(newQuantity);
  };

  return (
    <UnAuthenticatedLayout>
      <Helmet>
        <title>Ecommerce | {product?.product_name}</title>
      </Helmet>
      <PageBanner bannerTitle={`${product?.product_name}`} />
      <section className="max-w-7xl mx-auto py-8 grid grid-cols-1 md:grid-cols-[60%_1fr] gap-4 ">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full max-w-4xl mx-auto p-4 md:p-8 space-y-6 md:space-y-0 md:space-x-6">
          <figure className="w-full flex items-center justify-center shadow-md rounded-lg p-4 bg-white">
            <picture>
              <img
                className="h-auto w-full max-h-96 object-cover rounded-lg"
                src={product?.product_image}
                alt={product?.product_name}
              />
            </picture>
          </figure>
        </div>

        <div className="w-full  flex flex-col items-start p-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            {product?.product_name}
          </h2>
          <p className="text-gray-600 mt-2">{product?.product_description}</p>
          <ProductRatings productRatings={product?.product_rating} />

          <div className="my-4">
            <p className="text-lg font-semibold text-gray-800">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(product.product_price)}
            </p>
            <p
              className={`text-sm ${
                product?.product_stocks > 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {product?.product_stocks > 0
                ? `In Stock: ${product?.product_stocks}`
                : "Out of Stock"}
            </p>
          </div>

          <ProductCounter
            checkStock={product.product_stocks}
            initialCount={productQuantity}
            onChange={handleQuantityChange}
          />

          <div className="mt-5 w-full flex items-center justify-between">
            <ButtonCart
              quantityCount={productQuantity}
              btnName="Add to Cart"
              isDisabled={product.product_stocks <= 5 ? "disabled" : ""}
              productId={product.id}
            />
            <NavLink
              className="text-xm text-gray-500 hover:underline duration-500"
              to="/shop"
            >
              Shop More
            </NavLink>
          </div>
        </div>
      </section>
    </UnAuthenticatedLayout>
  );
};

export default SingleProduct;
