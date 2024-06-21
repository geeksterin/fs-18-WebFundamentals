import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://www.omdbapi.com/?i=${id}&apikey=1b4ecd2`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {movie != null ? (
        <div>
          <img src={movie.Poster} />
          <p>{movie.Title}</p>
          <p>{movie.Year}</p>
          <p>{movie.Plot}</p>
        </div>
      ) : (
        <p>Fetching Data please wait....</p>
      )}
    </div>
  );
}
