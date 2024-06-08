import axios from "axios";
import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((result) => setProducts(result.data));
  }, []);

  return <div>Products</div>;
}

export default Products;
