import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="px-12 py-2 bg-slate-700 text-white flex items-center justify-between">
      <h1 className="text-3xl"><Link to="/">Ecommerce</Link></h1>
      <ul className="flex items-center gap-4">
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact us</Link>
        <Link to="/blog">Blog</Link>
      </ul>
    </header>
  );
}

export default Header;
