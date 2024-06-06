import { useState } from "react";
import { useRef } from "react";
import ChildComponent from "./ChildComponent";

function UsingRef() {
  //   const [inp, setInp] = useState("");
  //   const [tasks, setTasks] = useState([]);

  const inpRef = useRef();

  //   console.log(inp);

  //   function printName() {
  //     console.log(inp.current.value);
  //   }

  //   function handleSubmit(e) {
  //     e.preventDefault();
  //     setTasks([...tasks, inp]);
  //     setInp(""); //We cleared the input box
  //     inpRef.current.focus();
  //   }

  return (
    <>
      <ChildComponent ref={inpRef} />
      <button>Print Name</button>

      {/* <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter your task"
          value={inp}
          onChange={(e) => setInp(e.target.value)}
          ref={inpRef}
        />
        <button type="submit">Add Task</button>
      </form> */}

      {/* <input type="text" placeholder="What is your name?" ref={inp} />
      <button onClick={printName}>Print Name</button> */}
    </>
  );
}

export default UsingRef;
