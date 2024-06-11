import React, { useContext } from "react";
import { MyContext } from "../App";

export default function D() {
  const { increaseCount } = useContext(MyContext);
  return (
    <div>
      D<button onClick={increaseCount}>+</button>
    </div>
  );
}
