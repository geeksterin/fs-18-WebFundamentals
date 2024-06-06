import { useMemo, useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const expensiveCalculatoin = (countData) => {
    console.log("Doing Expensive Calculation");
    for (let i = 0; i <= 100000000; i++) {
      countData += 1;
    }
    return countData;
  };

  let result = useMemo(() => {
    return expensiveCalculatoin(count);
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
      <p>Expensive Result: {result}</p>
    </div>
  );
}

export default Memo;
