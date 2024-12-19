import React, { useState } from 'react';

  const ProductCard =({onAddToCart}) =>{
    const [selectedColor, setSelectedColor] = useState("purple");
    const [selectedSize, setSelectedSize] = useState("")
  
  const product ={
    name : "Classy Modren Smart Watch",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident tempora exercitationem molestias impedit voluptatibus esse officiis vero perspiciatis dolorem ea?",
    Price: $100,
    originalPrice: $90,
    colors:["purple","black","blue","cyan"],
    sizes:["S","M","XL","XXL"],
    imageUrls:{
      purple: "https://i.ibb.co.com/Sxyk4NG/product-gallery.png",
      black: "https://i.ibb.co.com/HYFnhdv/lg-a-3.png",
      blue: "https://i.ibb.co.com/YWZQK87/blue.png",
      cyan: "https://i.ibb.co.com/F3J2NcV/cyan.png",
    }
  }

  return (
    <div className='max-w-5xl mx-auto bg-white p-8 rounded-md shadow-sm'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <img src={product.imageUrls[selectedColor]} alt={product.name} />
        </div>
      </div>
      {/*product details  */}
      <div>
        <h1 className='text-2xl font-bold mb-2'>{product.name}</h1>
        <div className='flex items-center space-x-2 mb-4'>
          <span className='text-yellow-500 text-sm'>⭐⭐⭐⭐</span>
          <span className='text-gray-600 text-sm'>
            (2 Reviews)
          </span>
        </div>
        <div className='flex items-center space-x-4 mb-4'>
          <span className='text-2xl font-bold text-blue-600'>
            ${product.Price.toFixed(2)}
          </span>
          <span className='text-gray-400 line-through'>${product.originalPrice.toFixed(2)}</span>
        </div>
        <p className='text-gray-600 mb-6'>{product.description}</p>
        <div className='mb-4'>
          <span className='block text-gray-800 font-semibold mb-2'>Band Color</span>
          <div className='flex space-x-4'>
            {
              product.colors.map((color)=>(
                <button key={color}
                onclick = {() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${
                  setSelectedColor === color ? "border-blue-600"
                  :"border-gray-300"

                }`}
                style={{backgroundColor:color}}
                ></button>
              ))
            }
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ProductCard;