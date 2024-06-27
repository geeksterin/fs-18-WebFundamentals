/* eslint-disable react/prop-types */
import React, { useState } from "react";
import MovieDisplay from "./MovieDisplay.jsx";

function MoviesDisplay({ heading, option1, option2, choice1, choice2 }) {
  const [visible, setVisible] = useState(true);

  return (
    <>
      <section id="movieDisplay">
        <header>
          <h2>{heading}</h2>
          <p>
            <span onClick={() => setVisible(true)}>{choice1}</span>
            <span onClick={() => setVisible(false)}>{choice2}</span>
          </p>
        </header>
        <section id="movieWrapper">
          {visible
            ? option1.map((movie, index) => {
                return <MovieDisplay key={index} movie={movie} />;
              })
            : option2.map((movie, index) => {
                return <MovieDisplay key={index} movie={movie} />;
              })}
        </section>
      </section>
    </>
  );
}

export default MoviesDisplay;
