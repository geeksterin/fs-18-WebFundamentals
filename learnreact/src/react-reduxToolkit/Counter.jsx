import { DECREMENT, INCREMENT } from "./slice";

function Counter() {  
  return (
    <>
      <button onClick={() => dispatch(INCREMENT())}>Increment</button>
      <p>0</p>
      <button onClick={() => dispatch(DECREMENT())}>Decrement</button>
    </>
  );
}

export default Counter;
