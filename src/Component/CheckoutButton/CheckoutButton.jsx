import React from "react";

const CheckoutButton = ({ totalItems, onClick }) => {
  if (totalItems === 0) return null;

  return (
    <div
      onClick={onClick}
      className="fixed bottom-4 right-4 bg-orange-500 text-white px-6 py-2 rounded-full cursor-pointer shadow-lg"
    >
      Checkout ({totalItems})
    </div>
  );
};

export default CheckoutButton;
