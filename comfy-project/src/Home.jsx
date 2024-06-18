import "./index.css";
import First from "./First";
import Header from "./Header";
import About from "./About";
import ProductOutlet from "./ProductOutlet";
import Products from "./Products";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const ecomContext = createContext();

function Home() {
  const [products, setProducts] = useState([]);

  //if we have products in localStorage, initialize cart with those items, if not, then initialize it to a blank array

  const [cart, setCart] = useState(
    localStorage.getItem("cart") === null
      ? []
      : JSON.parse(localStorage.getItem("cart"))
  );

  function handleAddToCart(e, product) {
    setCart([...cart, product]);
  }

  console.log(cart);

  useEffect(() => {
    let temp = cart;
    temp.forEach((obj) => {
      obj.quantity = 1;
    });

    localStorage.setItem("cart", JSON.stringify(temp));
  }, [cart]);

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

  // console.log(cart);

  return (
    <>
      <BrowserRouter>
        <ecomContext.Provider
          value={{ products, setProducts, handleAddToCart, cart, setCart }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<First />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<ProductOutlet />}>
              <Route index element={<Products />}></Route>
              <Route path=":id" element={<SingleProduct />}></Route>
            </Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </ecomContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default Home;
