import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from Fake Store API
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={{
            id: product.id,
            name: product.title,
            image: product.image,
            price: product.price,
            description: product.description,
          }}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
};

export default Home;
