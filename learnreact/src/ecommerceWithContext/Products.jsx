import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("https://dummyjson.com/products");
      //   console.log(result);
      setProducts(result.data.products);
    }
    fetchData();
  }, []);

  return (
    <>
      <h2>Products</h2>
      <div id="prods">
        {products.map((product, index) => {
          return <Product key={index} product={product} />;
        })}
      </div>
    </>
  );
}

export default Products;
