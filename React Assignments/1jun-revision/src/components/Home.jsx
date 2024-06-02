import { useState, useEffect } from "react";

function Home() {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);

  const inC = () => {
    setNumber(number + 1);
  };
  const inC2 = () => {
    setNumber2(number2 + 1);
  };

  useEffect(() => {
    console.log("Component is Mounted");
  }, []);

  useEffect(() => {
    console.log("Component is Udated");
  });

  useEffect(() => {
    console.log("Component is Udated Due to number1");
  }, [number]);

  useEffect(() => {
    console.log("Component is Udated Due to number2");
  }, [number2]);

  return (
    <div>
      <h1>Number 1 is : {number}</h1>
      <button onClick={inC}>+</button>
      <h1>Number 2 is : {number2}</h1>
      <button onClick={inC2}>+</button>
    </div>
  );
}

export default Home;
