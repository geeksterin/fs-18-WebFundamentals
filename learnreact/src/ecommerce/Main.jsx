/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./ecommerce.css";
import Product from "./Product";

function Main({ cart, setCart, handleAddToCart }) {
  // fetch("https://fakestoreapi.com/products")
  // .then((response) => response.json())
  // .then((result) => console.log(result));

  const [products, setProducts] = useState([]);

  // useEffect: allows you to run a code exactly once / allows you to run a code at a specific time

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      // console.log(result.data);
      setProducts(result.data);
    });
  }, []);

  console.log(cart);

  return (
    <>
      <div id="products">
        {products.map((product, index) => {
          return (
            <Product
              key={index}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </div>
    </>
  );
}
export default Main;
