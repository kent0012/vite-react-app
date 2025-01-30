import CategoryUnorderedList from "../components/CategoryUnorderedList";
import PageBanner from "../components/PageBanner";
import UnAuthenticatedLayout from "../layouts/UnAuthenticatedLayout";

import { useSelector } from "react-redux";
import { selectCategories } from "../feautures/categories/CategorySlice";
import { selectProducts } from "../feautures/products/ProductSlice";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import PriceRange from "../components/PriceRange";
const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [priceRange, setPriceRange] = useState(0);

  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);

  const handleInputValueChange = (category) => {
    // console.log("Selected Category ID:", category.id);
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category.id)) {
        // If the category is already selected, remove it
        return prevSelectedCategories.filter((id) => id !== category.id);
      } else {
        // Otherwise, add it to the selected categories
        return [...prevSelectedCategories, category.id];
      }
    });
  };

  // Filter products based on price range
  const handleSearchProduct = (e) => {
    setSearchProduct(e.target.value);

    if (e.target.value === "") {
      setSearchProduct("");
    } else {
      setSearchProduct(e.target.value);
    }
  };

  // Update the price range to the highest price in products
  useEffect(() => {
    if (products.length > 0) {
      const maxPrice = Math.max(
        ...products.map((product) => product.product_price)
      );
      setPriceRange(maxPrice);
    }
  }, [products]);

  // Filter products based on category
  const filterProducts = products.filter(
    (product) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category_id)) &&
      product.product_price <= priceRange &&
      product.product_name.toLowerCase().includes(searchProduct.toLowerCase())
  );
  return (
    <UnAuthenticatedLayout>
      <Helmet>
        <title>Ecommerce | Shop</title>
      </Helmet>
      <PageBanner bannerTitle="Shop" />
      <section className="max-w-7xl mx-auto py-8 grid grid-cols-1 md:grid-cols-[25%_1fr] gap-4 p-4">
        <div className="p-4 shadow rounded-md bg-white flex-col flex items-start justify-start ">
          <div className="mb-5">
            <h2 className="text-2xl md:text-3xl font-[Poppins] ">Categories</h2>
          </div>
          <CategoryUnorderedList
            data={categories}
            type="checkbox"
            valueKey="id"
            labelKey="category_name"
            onChange={handleInputValueChange}
            className="custom-category-list"
          />
          <hr className="w-full border-t-1 border-gray-300 my-5" />
          <div className="mb-5">
            <h2 className="text-2xl md:text-3xl font-[Poppins] ">
              Price Range
            </h2>
          </div>

          {/* <PriceRange
            priceRange={priceRange}
            maxPrice={
              Math.max(...products.map((product) => product.product_price)) || 0
            }
            onPriceChange={(newPriceRange) => setPriceRange(newPriceRange)}
          /> */}

          <PriceRange
            priceRange={priceRange}
            maxPrice={
              Math.ceil(
                Math.max(...products.map((product) => product.product_price)) /
                  100
              ) * 100 || 0
            }
            onPriceChange={(newPriceRange) => setPriceRange(newPriceRange)}
          />
          <hr className="w-full border-t-1 border-gray-300 my-5" />
        </div>
        <div className="p-4 shadow rounded-md bg-white">
          <div className="flex items-center justify-between gap-2 mb-5">
            <h2 className="text-2xl md:text-3xl font-[Poppins] ">Products</h2>
            <div className="shadow-lg rounded-md bg-white p-2 flex items-center gap-2 justify-between w-1/2">
              <input
                className="outline-0 w-full"
                type="search"
                placeholder="Search..."
                onChange={handleSearchProduct}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <ProductCard data={filterProducts} />
        </div>
      </section>
    </UnAuthenticatedLayout>
  );
};

export default Shop;
