import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { searchMovies } from "../slice";

const img_base_path = "https://image.tmdb.org/t/p/original/";

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", options);
}

function SearchResults() {
  const { searchTerm } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchMovies(searchTerm));
  }, [dispatch, searchTerm]);

  const { searchResults } = useSelector((state) => {
    return state.movieReducer;
  });

  return (
    <>
      <h2>{`Search Results for ${searchTerm}`}</h2>

      <div id="movieDisplay">
        {searchResults
          ? searchResults.map((movie, index) => {
              return (
                <div className="result" key={index}>
                  <div className="image-container">
                    <img
                      src={img_base_path + movie.poster_path}
                      alt={movie.title || movie.original_title}
                    />
                  </div>
                  <div className="info">
                    <h3>
                      {movie.title ||
                        movie.original_title ||
                        movie.name ||
                        movie.original_name}
                    </h3>
                    <p>
                      {movie.release_date
                        ? formatDate(movie.release_date)
                        : formatDate(movie.first_air_date)}
                    </p>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}

export default SearchResults;
