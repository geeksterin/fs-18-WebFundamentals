import "./App.css";
import { useEffect, useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const expensiveTask = (n) => {
    // expensive calucation
    console.log("Expensive Calculation is Going on");
    for (let i = 0; i <= 1000000; i++) {}
    return n + 20;
  };

  let result = useMemo(() => {
    return expensiveTask(count);
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Change 1</button>
      <button onClick={() => setFlag(!flag)}>Toggle Flag</button>
      <p>Expensive Result: {result}</p>
    </div>
  );
}

export default App;
