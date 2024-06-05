import React, { useState, useMemo } from "react";

const ExpensiveFunction = () => {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("Expensive calculation");
    // Simulate an expensive calculation
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result + num;
  };

  const memoizedValue = expensiveCalculation(count);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Expensive Calculation Result: {memoizedValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setOtherState(otherState + 1)}>
        Change Other State
      </button>
    </div>
  );
};

export default ExpensiveFunction;
