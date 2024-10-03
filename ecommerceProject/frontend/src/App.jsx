import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SingleProduct from "./pages/SingleProduct";
import { createContext, useEffect, useState } from "react";
import axios from "./axiosConfig";
import Login from "./pages/Login";
import Register from "./components/Register";

export const userContext = createContext();

function App() {
  const [isUserLoggedIn, setIsUserLoggedin] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/check/me", {
          validateStatus: false,
        });
        // console.log(response);
        if (response.status === 200 && response.data.user)
          setIsUserLoggedin((prevValue) => response.data.user);
        else console.log("User is not logged in");
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  function addToWishlist(productToAdd) {
    // if (!isUserLoggedIn) navigate("/login");
  }
  function addToCart(productToAdd) {
    // if (!isUserLoggedIn) navigate("/login");
  }

  return (
    <>
      <BrowserRouter>
        <userContext.Provider
          value={{
            isUserLoggedIn,
            setIsUserLoggedin,
            cart,
            wishlist,
            addToCart,
            addToWishlist,
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </userContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
