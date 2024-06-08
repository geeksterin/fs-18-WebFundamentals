import "./App.css";
import { useEffect, useMemo, useState, useCallback } from "react";
import Child from "./components/Child";

function App() {
  const [count, setCount] = useState(0);

  const sayHi = useCallback(() => {
    return () => {
      console.log("HI");
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Change 1</button>
      <Child func={sayHi} />
    </div>
  );
}

export default App;
