import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    fetch("http://www.omdbapi.com/?s=transformer&apikey=1b4ecd2")
      .then((res) => res.json())
      .then((data) => setMovies(data.Search))
      .catch((err) => console.log(err));
    //
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {movies.map((item) => (
        <Link to={`/movie/${item.imdbID}`}>
          <div>
            <img src={item.Poster} />
            <p>{item.Title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
