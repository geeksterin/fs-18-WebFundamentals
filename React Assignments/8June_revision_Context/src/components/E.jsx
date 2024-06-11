import React, { useContext } from "react";
import { CContext } from "./C";
import { MyContext } from "../App";

export default function E() {
  const { age } = useContext(CContext);
  const { name } = useContext(MyContext);
  return (
    <div>
      E<h1>age: {age}</h1>
      <h1>Name: {name}</h1>
    </div>
  );
}
