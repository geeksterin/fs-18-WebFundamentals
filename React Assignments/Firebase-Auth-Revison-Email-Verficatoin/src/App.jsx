import { useState } from "react";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
