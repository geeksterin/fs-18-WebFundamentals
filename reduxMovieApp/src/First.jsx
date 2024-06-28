import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SearchResults from "./components/SearchResults";

function First() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search/:searchTerm" element={<SearchResults />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default First;
