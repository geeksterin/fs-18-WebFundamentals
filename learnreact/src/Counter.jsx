import { useState } from "react";

function Counter() {
  // STATE: is a container / variable which tells us the current state of any component / element at a given time.

  // WHENEVER STATE IS UPDATED / MODIFIED, THE COMPONENTS WHERE IT IS USED, ARE RE-RENDERED AUTOMATICALLY

  // STATE VARIABLES ARE IMMUTABLE, AS IN WE CAN'T CHANGE THEM DIRECTLY

  // HOOKS: are functions in react with the word "use" attached in the beginning of the name of the function. Hooks can be both predefined as well as as user defined / custom hooks.

  const [counter, setCounter] = useState(0);

  /*
  const counter = 0;
  function setCounter(num){
    counter = num
  }

  */

  // function handleIncrement() {
  //   setCounter(counter + 1);
  // }
  // function handleDecrement() {
  //   setCounter(counter - 1);
  // }

  function handleChange(flag) {
    if (flag === "inc") setCounter(counter + 1);
    else setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter</h1>
      <div id="counter">
        <button onClick={() => handleChange("inc")}>Increment</button>
        <p>{counter}</p>
        <button onClick={() => handleChange("dec")}>Decrement</button>
      </div>
    </>
  );
}
export default Counter;
