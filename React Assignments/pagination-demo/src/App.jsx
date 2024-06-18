import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// http://www.omdbapi.com/?s=${query}&page=${page}&apikey=1b4ecd2

function App() {
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);

  const [movies, setmovies] = useState([]);

  const fetchMovies = (query) => {
    fetch(`http://www.omdbapi.com/?s=${query}&page=${page}&apikey=1b4ecd2`)
      .then((res) => res.json())
      .then((data) => setmovies(data.Search))
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    fetchMovies("Harry");
  }, [page]);

  return (
    <div>
      <h1>Movies</h1>

      {movies.map((item) => (
        <p>{item.Title}</p>
      ))}

      <button onClick={() => setPage(page - 1)}>Prev</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

export default App;
