import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Header from "./Header";
import About from "./About";
import Contact from "./Contact";
import Cart from "./Cart";
import Products from "./Products";
import { createContext, useState } from "react";

export const EcommerceContext = createContext();

// CONTEXT API: is a global state management tool

function Home() {
  const [cart, setCart] = useState([]);

  return (
    <EcommerceContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </EcommerceContext.Provider>
  );
}

export default Home;
