import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      if (exists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    // Visual Feedback: Optional console.log or notification
    console.log(`${product.name} added to cart!`);
  };

  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };
  
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };
  

  return (
    <Router>
      <Navbar cart={cart} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
  path="/cart"
  element={
    <Cart
      cart={cart}
      updateQuantity={updateQuantity}
      removeItem={removeItem}
    />
  }
/>

      </Routes>
    </Router>
  );
};

export default App;
