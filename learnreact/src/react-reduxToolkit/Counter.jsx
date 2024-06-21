import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "./slice";

function Counter() {
  const dispatch = useDispatch();
  const initState = useSelector((state) => {
    return state.baburav;
  });
  return (
    <>
      <button onClick={() => dispatch(INCREMENT())}>Increment</button>

      <p>{initState.counter}</p>

      <button onClick={() => dispatch(DECREMENT())}>Decrement</button>
    </>
  );
}

export default Counter;
