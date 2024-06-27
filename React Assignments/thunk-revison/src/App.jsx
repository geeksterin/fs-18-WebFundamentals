import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "./redux/slices/movieSlice";

function App() {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data);
  return (
    <>
      <button
        onClick={() => {
          dispatch(fetchMovies());
        }}
      >
        Fetch Movies
      </button>
      {data && data.loading && <p>Please Wait while fetching movies</p>}
    </>
  );
}

export default App;
