import React, { useState } from "react";

const ProductCard = ({ onAddToCart }) => {
  const [selectedColor, setSelectedColor] = useState("purple");
  const [selectedSize, setSelectedSize] = useState(""); 

  const product = {
    name: "Classy Modern Smart Watch",
    description:
      "I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born...",
    price: 79.0,
    originalPrice: 99.0,
    colors: ["purple", "black", "blue", "cyan"],
    sizes: ["S", "M", "XL"],
    imageUrls: {
      purple: "https://i.ibb.co.com/Sxyk4NG/product-gallery.png",
      black: "https://i.ibb.co.com/HYFnhdv/lg-a-3.png",
      blue: "https://i.ibb.co.com/YWZQK87/blue.png",
      cyan: "https://i.ibb.co.com/F3J2NcV/cyan.png",
    },
  };

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      selectedColor,
      selectedSize,
      quantity: 1,
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/*product image*/}
        <div>
          <img
            src={product.imageUrls[selectedColor]}
            alt={product.name}
            className="w-full rounded-lg"
          />
        </div>
        

        {/* product details */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-yellow-500 text-sm">⭐⭐⭐⭐</span>
            <span className="text-gray-600 text-sm">(2 Reviews)</span>
          </div>

          <div className="flex items-center space-x-4 mb-4">
            <span className="text-2xl font-bold text-blue-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-4">
            <span className="block text-gray-800 font-semibold mb-2">
              Band Color
            </span>
            <div className="flex space-x-4">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-blue-600"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <span className="block text-gray-800 font-semibold mb-2">
              Wrist Size
            </span>
            <div className="flex space-x-4">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-md ${
                    selectedSize === size
                      ? "bg-blue-600 text-white"
                      : "border-gray-300 text-gray-800"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
            <button className="text-blue-600 border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50">
              ❤️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
