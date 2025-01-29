import { useState } from "react";

const ProductCounter = ({ onChange, initialCount = 1 }) => {
  const [quantityCount, setQuantityCount] = useState(initialCount);

  const handleQuantityChange = (newCount) => {
    const count = Math.max(1, newCount);
    setQuantityCount(count);
    if (onChange) onChange(count);
  };

  return (
    <div className="flex items-center justify-start gap-1 w-full">
      <button
        onClick={() => handleQuantityChange(quantityCount - 1)}
        className="text-gray-500 bg-gray-100 px-3 rounded"
      >
        -
      </button>
      <input
        className="outline-0 text-center md:w-10 w-5 "
        type="number"
        readOnly
        value={quantityCount}
        onChange={(e) => handleQuantityChange(Number(e.target.value) || 1)}
      />
      <button
        onClick={() => handleQuantityChange(quantityCount + 1)}
        className="text-gray-500 bg-gray-100 px-3 rounded"
      >
        +
      </button>
    </div>
  );
};

export default ProductCounter;
