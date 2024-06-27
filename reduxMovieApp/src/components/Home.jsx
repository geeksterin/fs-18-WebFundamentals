import { useEffect } from "react";
import Search from "./Search.jsx";
import MoviesDisplay from "./MoviesDisplay.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTrendingMoviesByDay,
  fetchTrendingMoviesByWeek,
} from "../slice.js";
function Home() {
  const dispatch = useDispatch();
  const { trendingMoviesByDay, trendingMoviesByWeek } = useSelector((state) => {
    return state.movieReducer;
  });

  useEffect(() => {
    dispatch(fetchTrendingMoviesByDay());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchTrendingMoviesByWeek());
  }, [dispatch]);

  console.log(trendingMoviesByDay, trendingMoviesByWeek);

  return (
    <>
      <Search />
      <MoviesDisplay data={trendingMoviesByDay} />
      <MoviesDisplay data={trendingMoviesByWeek} />
    </>
  );
}

export default Home;
