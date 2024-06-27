import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>Movies</h1>
      <ul>
        <li>
          <Link to="/movies">Movies</Link>
        </li>
        <li>
          <Link to="/tv">TV</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
