import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  //   console.log(user);

  function handleLogout() {
    signOut(auth);
    navigate("/");
  }

  return (
    <header className="flex items-center justify-between py-4 px-16 mb-2 shadow-lg shadow-slate-300">
      <h1 className="text-3xl font-bold uppercase">Geekster Blog</h1>

      <ul className="flex items-center">
        <li>
          <Link
            to="/"
            className="px-2 py-2 mx-2 hover:bg-blue-500 hover:text-white hover:rounded"
          >
            Home
          </Link>
        </li>

        {user ? (
          user.displayName || user.email ? (
            <li>
              Welcome{" "}
              <span className="font-bold">
                {user.displayName || user.email}
              </span>
              <button onClick={handleLogout}>Logout</button>
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="px-2 py-2 mx-2 hover:bg-blue-500 hover:text-white hover:rounded"
              >
                Login
              </Link>
            </li>
          )
        ) : (
          <li>
            <Link
              to="/login"
              className="px-2 py-2 mx-2 hover:bg-blue-500 hover:text-white hover:rounded"
            >
              Login
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
