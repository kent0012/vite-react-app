const CartSummary = ({ label, totalSum }) => {
  return (
    <div className="flex items-center justify-between w-full">
      <h3 className="text-lg">{label}</h3>
      <p className="text-lg text-gray-500">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(totalSum)}
      </p>
    </div>
  );
};

export default CartSummary;
