import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Registration from "./Registration";
import Login from "./Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
