import React, { createContext } from "react";

import E from "./E";
import F from "./F";

export const CContext = createContext(null);

export default function C() {
  return (
    <div>
      <h1>C</h1>
      <CContext.Provider value={{ age: 21 }}>
        <E />
        <F />
      </CContext.Provider>
    </div>
  );
}
