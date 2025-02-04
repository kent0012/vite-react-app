import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import UnAuthenticatedLayout from "../layouts/UnAuthenticatedLayout";
import PageBanner from "../components/PageBanner";
import CategoryUnorderedList from "../components/CategoryUnorderedList";
import ProductCard from "../components/ProductCard";
import PriceRange from "../components/PriceRange";
import { selectCategories } from "../feautures/categories/CategorySlice";
import { selectProducts } from "../feautures/products/ProductSlice";

const Shop = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [priceRange, setPriceRange] = useState(0);
  const [debouncedPriceRange, setDebouncedPriceRange] = useState(0);

  const categories = useSelector(selectCategories);
  const products = useSelector(selectProducts);

  const handleInputValueChange = (category) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category.id)
        ? prevSelectedCategories.filter((id) => id !== category.id)
        : [...prevSelectedCategories, category.id]
    );
  };

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  // Debounce effect for price range
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setSearchProduct(searchInput);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [searchInput]);

  useEffect(() => {
    if (products.length > 0) {
      const maxPrice = Math.max(
        ...products.map((product) => product.product_price)
      );
      setPriceRange(maxPrice);
      setDebouncedPriceRange(maxPrice);
    }
  }, [products]);

  // Debounce effect for price range
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setDebouncedPriceRange(priceRange);
    }, 500);
    return () => clearTimeout(delayDebounce);
  }, [priceRange]);

  const filterProducts = products.filter(
    (product) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category_id)) &&
      product.product_price <= debouncedPriceRange &&
      product.product_name.toLowerCase().includes(searchProduct.toLowerCase())
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <UnAuthenticatedLayout>
      <Helmet>
        <title>Ecommerce | Shop</title>
      </Helmet>
      <PageBanner bannerTitle="Shop" />
      <section className="max-w-7xl mx-auto py-8 grid grid-cols-1 md:grid-cols-[25%_1fr] gap-4 p-4">
        <div className="p-4 shadow rounded-md bg-white flex-col flex items-start justify-start">
          <div className="mb-5">
            <h2 className="text-2xl md:text-3xl font-[Poppins]">Categories</h2>
          </div>
          <CategoryUnorderedList
            isLoading={isLoading}
            data={categories}
            type="checkbox"
            valueKey="id"
            labelKey="category_name"
            onChange={handleInputValueChange}
            className="custom-category-list"
          />
          <hr className="w-full border-t-1 border-gray-300 my-5" />
          <div className="mb-5">
            <h2 className="text-2xl md:text-3xl font-[Poppins]">Price Range</h2>
          </div>
          <PriceRange
            isLoading={isLoading}
            priceRange={priceRange}
            maxPrice={
              Math.ceil(
                Math.max(...products.map((product) => product.product_price)) /
                  100
              ) * 100 || 0
            }
            onPriceChange={setPriceRange}
          />
          <hr className="w-full border-t-1 border-gray-300 my-5" />
        </div>
        <div className="p-4 shadow rounded-md bg-white">
          <div className="flex items-start flex-col md:flex-row justify-between gap-2 mb-5">
            <div className="shadow-lg rounded-md bg-white p-2 flex items-center gap-2 justify-between md:w-1/2 w-full">
              <input
                className="outline-0 w-full"
                type="search"
                placeholder="Search..."
                value={searchInput}
                onChange={handleSearchInput}
              />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-[Poppins] md:mt-0 mt-5">
              Products
            </h2>
          </div>
          <ProductCard isLoading={isLoading} data={filterProducts} />
        </div>
      </section>
    </UnAuthenticatedLayout>
  );
};

export default Shop;
