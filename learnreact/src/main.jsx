import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'

// import Rishabh from './Rishabh.jsx'
// import Sum from "./Sum";

// import ArrayOfObjects from "./ArrayOfObjects";
import Counter from "./Counter";
import "./style.css";

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
root.render(<Counter />);

// document.createElement("h1").innerText = "Hello Geeksters, are you having fun....!"
