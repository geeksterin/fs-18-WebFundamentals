/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function Header({cart}) {
  return (
    <header>
      <h1>Ecommerce</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart <span>{cart.length}</span></NavLink>
        </li>
      </ul>
    </header>
  );
}
export default Header;
