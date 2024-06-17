import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import { createContext, useState } from "react";
export const userContext = createContext();

function App() {
  const [loggedinUser, setLoggedInUser] = useState({});

  return (
    <>
      <BrowserRouter>
        <userContext.Provider value={{ loggedinUser, setLoggedInUser }}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </userContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
