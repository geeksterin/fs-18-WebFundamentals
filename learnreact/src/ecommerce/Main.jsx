import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./ecommerce.css";
import Product from "./Product";
import Header from "./Header";

function Main() {
  // fetch("https://fakestoreapi.com/products")
  // .then((response) => response.json())
  // .then((result) => console.log(result));

  const [products, setProducts] = useState([]);

  // useEffect: allows you to run a code exactly once / allows you to run a code at a specific time

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((result) => {
      console.log(result.data);
      setProducts(result.data);
    });
  }, []);

  return (
    <>
      <Header />
      <div id="products">
        {products.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </div>
    </>
  );
}
export default Main;
