import React from "react";
import ReactDOM from "react-dom/client";
import First from "./First.jsx";
import "./movies.css";
import { Provider } from "react-redux";
import { store } from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <First />
  </Provider>
);
