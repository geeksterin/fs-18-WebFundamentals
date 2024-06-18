import { useContext } from "react";
import { AiFillMoon } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ecomContext } from "./Home";

///DAY 3

function Header() {
  const { cart } = useContext(ecomContext);

  return (
    <header>
      <div
        id="top"
        className="py-2 px-20 bg-cyan-950 flex items-center justify-end"
      >
        <Link to="" className="text-white px-2">
          Sign In
        </Link>
        <Link to="" className="text-white px-2">
          Register
        </Link>
      </div>
      <div
        id="bottom"
        className="py-2 px-20 bg-blue-400 flex items-center justify-between"
      >
        <h1 className="text-white text-xl">ECOM</h1>
        <ul>
          <li>
            <Link to="/" className="text-white px-4">
              Home
            </Link>
            <Link to="/about" className="text-white px-4">
              About
            </Link>
            <Link to="/products" className="text-white px-4">
              Products
            </Link>
            <Link to="/cart" className="text-white px-4">
              Cart
            </Link>
          </li>
        </ul>

        <ul className="w-2 flex">
          <li className="px-2">
            <AiFillMoon />
          </li>
          <li className="px-2">
            <AiOutlineShoppingCart /> <span>{cart.length}</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
