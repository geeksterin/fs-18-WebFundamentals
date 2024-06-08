import React, { useMemo, useState } from "react";

function UseMemo() {
  const [num, setNum] = useState(0);
  const [darkTheme, setDarkTheme] = useState(false);

  const inlineStyle = {
    backgroundColor: darkTheme ? "#000" : "#fff",
    color: darkTheme ? "#fff" : "#000",
  };

  const result = useMemo(() => {
    return calculateSquare(num);
  }, [num]);

  function calculateSquare(num) {
    for (let i = 0; i < 2000000000; i++) {}
    return num * num;
  }
  //   console.log(darkTheme)

  return (
    <div style={inlineStyle}>
      <input
        type="text"
        placeholder="Enter a number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <p>{result}</p>

      <button
        onClick={() =>
          setDarkTheme((prevTheme) => {
            return !prevTheme;
          })
        }
      >
        Change Theme
      </button>
    </div>
  );
}

export default UseMemo;
