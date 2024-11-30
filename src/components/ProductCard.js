import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000); // Reset animation after 2 seconds
  };

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-500">${product.price.toFixed(2)}</p>
      <button
        onClick={handleAddToCart}
        className={`py-1 px-4 rounded mt-3 ${
          added ? "bg-green-500" : "bg-blue-500"
        } text-white hover:bg-blue-700`}
      >
        {added ? "Added!" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
