import React from "react";

const ProductRatings = ({ productRatings }) => {
  const maxStars = 5;

  // Create arrays for filled and empty stars based on the rating
  const filledStars = Math.floor(productRatings); // Full stars
  const halfStar = productRatings % 1 !== 0; // Check if there's a half star
  const emptyStars = maxStars - filledStars - (halfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className="flex items-center my-2">
      {/* Render filled stars */}
      {[...Array(filledStars)].map((_, index) => (
        <i
          key={`filled-${index}`}
          className="fa-solid fa-star text-amber-400"
        ></i>
      ))}

      {/* Render half star if applicable */}
      {halfStar && (
        <i className="fa-solid fa-star-half-stroke text-amber-400"></i>
      )}

      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, index) => (
        <i
          key={`empty-${index}`}
          className="fa-regular fa-star text-gray-300"
        ></i>
      ))}

      {/* Display numeric rating */}
      <span className="ml-2 text-sm text-gray-500">
        {productRatings.toFixed(1)}
      </span>
    </div>
  );
};

export default ProductRatings;
