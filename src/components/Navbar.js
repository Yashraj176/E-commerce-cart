import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ cart }) => {
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold hover:text-gray-300"
          style={({ isActive }) => ({
            color: isActive ? "#38bdf8" : "white",
          })}
        >
          ShopEasy
        </NavLink>

        {/* Links */}
        <div className="flex items-center space-x-4">
          <NavLink
            to="/"
            className="hover:text-gray-300"
            style={({ isActive }) => ({
              color: isActive ? "#38bdf8" : "white",
            })}
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className="hover:text-gray-300 flex items-center space-x-1"
            style={({ isActive }) => ({
              color: isActive ? "#38bdf8" : "white",
            })}
          >
            <span>Cart</span>
            {/* Cart Counter */}
            {cartCount > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5">
                {cartCount}
              </span>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
