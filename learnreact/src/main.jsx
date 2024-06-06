import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'

// import Rishabh from './Rishabh.jsx'
// import Sum from "./Sum";

// import ArrayOfObjects from "./ArrayOfObjects";
// import Counter from "./Counter";
// import ToggleImage from "./ToggleImage";
// import ShoppingCart from "./ShoppingCart";
// import TodoList from "./TodoList";
// import UseCallback from "./memoize/UseCallback";
// import UseMemo from "./memoize/UseMemo";
// import UsingRef from "./memoize/UsingRef";
// import "./style.css";

// import BoxHideShow from "./BoxHideShow";

// import Main from "./ecommerce/Main";
import Home from "./ecommerce/Home";
// import Main from "./routing/Main";
// import Main from "./generatePassword/Main";

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <h1>Hello Geeksters, are you having fun....!</h1>
//   </React.StrictMode>,
// )

// let a = 25;
// let b = 35;

const root = ReactDOM.createRoot(document.querySelector("#dump"));
// root.render(<Sum a={a} b={b} />);
// root.render(<Sum num={[a, b]} />);
// root.render(<ArrayOfObjects />);
root.render(<Home />);

// document.createElement("h1").innerText = "Hello Geeksters, are you having fun....!"
