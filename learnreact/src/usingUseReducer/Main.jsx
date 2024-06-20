import { useReducer } from "react";

function Main() {
  function counterReducer(state, action) {
    if (action.type === "INCREMENT") {
      return { counter: state.counter + 1 };
    } else {
      return { counter: state.counter - 1 };
    }
  }
  const [state, dispatch] = useReducer(counterReducer, { counter: 0 });

  return (
    <>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <p>{state.counter}</p>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </>
  );
}

export default Main;
