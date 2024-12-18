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
    <div>
      
    </div>
  );
};

export default ProductCard;