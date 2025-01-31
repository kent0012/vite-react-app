import Loader from "./Loader";

const PriceRange = ({ priceRange, onPriceChange, maxPrice, isLoading }) => {
  // Handle range input change
  const handlePriceChange = (e) => {
    const newPrice = parseInt(e.target.value, 10);
    onPriceChange(newPrice);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full">
      <p className="text-lg font-semibold mb-3">
        Price Range: {""}
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(priceRange)}
      </p>
      <input
        className="w-full"
        type="range"
        step="100"
        min="0"
        max={maxPrice}
        value={priceRange}
        onChange={handlePriceChange}
      />
    </div>
  );
};

export default PriceRange;
