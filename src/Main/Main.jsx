import React, { useState } from "react";
import ProductCard from "../Component/ProductCard/ProductCard";
import CheckoutButton from "../Component/CheckoutButton/CheckoutButton";
import CartModal from "../Component/CartModal/CartModal";


const Main = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <ProductCard onAddToCart={handleAddToCart} />
      <CheckoutButton
        totalItems={cartItems.length}
        onClick={() => setIsCartOpen(true)}
      />
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          onClose={handleCloseCart}
        />
      )}
    </div>
  );
};

export default Main;
