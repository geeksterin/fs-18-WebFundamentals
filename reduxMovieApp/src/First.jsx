import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

function First() {
  return (
    <BrowserRouter>
        <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default First;
