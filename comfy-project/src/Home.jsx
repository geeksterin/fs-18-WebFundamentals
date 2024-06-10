import "./index.css";
import First from "./First";
import Header from "./Header";
import About from "./About";
import Products from "./Products";
import Cart from "./Cart";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const ecomContext = createContext();

function Home() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  function handleAddToCart(e, product) {
    setCart([...cart, product]);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://strapi-store-server.onrender.com/api/products"
      );
      const result = await response.json();
      // console.log(result.data);
      setProducts(result.data);
    }
    fetchData();
  }, []);

  console.log(cart);

  return (
    <>
      <BrowserRouter>
        <ecomContext.Provider
          value={{ products, setProducts, handleAddToCart, cart }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<First />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </ecomContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default Home;
