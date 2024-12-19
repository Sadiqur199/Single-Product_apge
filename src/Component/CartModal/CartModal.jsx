import React from "react";

const CartModal = ({ cartItems, onClose }) => {
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-600 text-sm border-b">
              <th className="pb-4">Item</th>
              <th className="pb-4">Color</th>
              <th className="pb-4">Size</th>
              <th className="pb-4 text-center">Qnt</th>
              <th className="pb-4 text-right">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-4 flex items-center">
                  <img
                    src={item.imageUrls[item.selectedColor]}
                    alt={item.name}
                    className="w-16 h-16 rounded-lg mr-4"
                  />
                  <span className="text-gray-800 font-medium">
                    {item.name}
                  </span>
                </td>
                <td className="py-4 text-gray-600">{item.selectedColor}</td>
                <td className="py-4 text-gray-600">{item.selectedSize}</td>
                <td className="py-4 text-center text-gray-600">
                  {item.quantity}
                </td>
                <td className="py-4 text-right text-gray-800 font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right font-bold mt-6 text-lg">
          Total ({totalQuantity} items): ${totalPrice.toFixed(2)}
        </div>
        <div className="flex justify-between mt-6">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
          >
            Continue Shopping
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
