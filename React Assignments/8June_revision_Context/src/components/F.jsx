import { useContext } from "react";

import { MyContext } from "../App.jsx";

export default function F() {
  const { count, name } = useContext(MyContext);

  return (
    <div>
      F<p>Count {count}</p>
      <p>Name: {name}</p>
    </div>
  );
}
