/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { EcommerceContext } from "./Home";

function Header() {
  const { cart } = useContext(EcommerceContext);

  return (
    <header>
      <h1>
        <Link to="/">EcommerceContext</Link>
      </h1>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/cart">
            Cart <span>{cart.length}</span>
          </Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
