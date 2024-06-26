/* eslint-disable react/prop-types */
import React from "react";

const img_base_path = "https://image.tmdb.org/t/p/original/";

function MoviesDisplay({ data }) {
  return (
    <>
      {data.map((movie, index) => {
        return (
          <div className="movieBlock" key={index}>
            <img src={img_base_path + movie.poster_path} alt={movie.title} />
            <h3>{movie.title || movie.original_title}</h3>
          </div>
        );
      })}
    </>
  );
}

export default MoviesDisplay;
