import React from "react";

const CartItem = ({ item, updateQuantity, removeItem }) => (
  <div className="flex items-center justify-between border-b py-4">
    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
    <div className="flex-1 ml-4">
      <h3 className="font-semibold">{item.name}</h3>
      <p>${item.price.toFixed(2)}</p>
    </div>
    <div>
      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
      <span className="mx-2">{item.quantity}</span>
      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
    </div>
    <button
      onClick={() => removeItem(item.id)}
      className="text-red-500 ml-4 hover:underline"
    >
      Remove
    </button>
  </div>
);

export default CartItem;
