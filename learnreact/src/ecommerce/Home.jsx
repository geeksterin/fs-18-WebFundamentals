import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import About from "./About";
import Blog from "./Blog";
import Contact from "./Contact";
import Header from "./Header";
import Cart from "./Cart";
import { useState } from "react";

function Home() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(event, product) {
    event.preventDefault();
    setCart([...cart, product]);
  }

  function handleRemoveFromCart(event, productID) {
    event.preventDefault();
    setCart(
      cart.filter((cartItem) => {
        return cartItem.id !== productID;
      })
    );
  }

  return (
    <>
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                cart={cart}
                setCart={setCart}
                handleAddToCart={handleAddToCart}
              />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route
            path="/cart"
            element={
              <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart} />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default Home;
