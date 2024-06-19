import { useReducer } from "react";
import { useState } from "react";

// What is useReducer?
//useReducer is a React hook that manages complex state logic in functional components.
//It's an alternative to useState, particularly useful when you have state transitions that depend on the previous state or when you're dealing with complex state objects.

// Why useReducer?
// useReducer is beneficial when:

// Your state logic is complex and involves multiple sub-values
// The next state depends on the previous one
// You want to improve performance for components that trigger deep updates

function Main() {
  //   const [counter, setCounter] = useState(0);

  function counterReducer(counter, action) {
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
