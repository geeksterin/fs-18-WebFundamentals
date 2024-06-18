import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Connections from "./components/Connections";
import Post from "./components/Post";
import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import HomeEntryPoint from "./components/HomeEntryPoint";
export const AuthContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);

  return (
    <div>
      <AuthContext.Provider value={{ user }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<HomeEntryPoint />}>
            <Route index element={<Home />} />
            <Route path="posts" element={<Post />} />
            <Route path="connections" element={<Connections />} />
          </Route>
          
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
