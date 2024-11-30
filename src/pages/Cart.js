import React, { useState } from "react";

const Cart = ({ cart, updateQuantity, removeItem }) => {
  const [discount, setDiscount] = useState({ type: "none", value: 0 });

  const calculateSubtotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const applyDiscount = (subtotal) => {
    if (discount.type === "fixed") {
      return Math.max(0, subtotal - discount.value);
    }
    if (discount.type === "percentage") {
      return Math.max(0, subtotal - (subtotal * discount.value) / 100);
    }
    return subtotal;
  };

  const handleDiscountChange = (type, value) => {
    setDiscount({ type, value: parseFloat(value) });
  };

  const subtotal = calculateSubtotal();
  const total = applyDiscount(subtotal);

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
  };

  if (cart.length === 0) {
    return <div className="p-6 text-center">Your cart is empty!</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-500">${item.price.toFixed(2)}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>
              <span className="px-2">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Cart Summary Section */}
      <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-2">Cart Summary</h2>
        <p className="mb-2">Subtotal: ${subtotal.toFixed(2)}</p>

        {/* Discount Options */}
        <div className="mb-2">
          <label className="block text-sm font-medium mb-1">Apply Discount:</label>
          <div className="flex space-x-2">
            <button
              onClick={() => handleDiscountChange("fixed", 10)}
              className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              $10 Off
            </button>
            <button
              onClick={() => handleDiscountChange("percentage", 10)}
              className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              10% Off
            </button>
            <button
              onClick={() => handleDiscountChange("none", 0)}
              className="px-4 py-1 bg-gray-300 text-black rounded hover:bg-gray-400"
            >
              Clear Discount
            </button>
          </div>
        </div>

        <p className="mb-2">Total after discount: ${total.toFixed(2)}</p>

        {/* Checkout Button */}
        <button
          onClick={handleCheckout}
          className="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-700"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
