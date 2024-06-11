import React, { useContext } from "react";
import { MyContext } from "../App";

export default function G() {
  const { count } = useContext(MyContext);
  return <div>G</div>;
}
