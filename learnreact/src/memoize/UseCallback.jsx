/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */

// Are state changes synchronous or asynchronous?
// State changes are asynchronous. React updates states in batches.

// Difference between useCallback & useMemo?
// useCallback will return the memoized function, useMemo will return a memoized value

import { memo, useCallback, useState } from "react";

function UseCallback() {
  const [counter, setCounter] = useState(0);
//   const [forcererender, setForcererender] = useState(0);

  //   useCallback(() => {}, []);

  const incrementCounter = useCallback(() => {
    // setCounter(counter + 1);

    //passing a callback function to update state
    // setCounter(counter + 1);

    setCounter((prevCounter) => prevCounter + 1);

    // console.log(counter); //print it before re-rendering
  }, []);
  //   console.log(counter); //print it after re-rendering

//   const incrementForce = () => {
//     setForcererender((prevForce) => prevForce + 1);
//   };

  return (
    <>
      <p>{counter}</p>
      <ChildComponent
        incrementCounter={incrementCounter}        
      />
      
    </>
  );
}

export default UseCallback;

// function ChildComponent({ incrementCounter }) {
//   console.log("Child component re-rendering");
//   return <button onClick={incrementCounter}>Increment Counter</button>;
// }

const ChildComponent = memo(({ incrementCounter }) => {
  console.log("Child component re-rendering");
  return (
    <>
      <button onClick={incrementCounter}>Increment Counter</button>      
    </>
  );
});
