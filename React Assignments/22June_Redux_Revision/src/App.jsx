import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AddContact from "./components/AddContact";
import Contact from "./components/Contacts";

import { useSelector } from "react-redux";

function App() {
  const contacts = useSelector((state) => state.contacts);
  return (
    <div>
      <AddContact />
      <Contact contacts={contacts} />
    </div>
  );
}

export default App;
