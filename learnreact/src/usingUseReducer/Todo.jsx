import { useReducer, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

function Todo() {
  function todoReducer(state, action) {
    switch (action.type) {
      case "ADD_TASK":
        return [...state, { text: action.payload, id: Date.now() }];

      case "DELETE_TASK":
        return state.filter((task) => {
          return task.id !== action.payload;
        });
    }
  }

  const [inputValue, setInputValue] = useState("");
  //   const [tasks, setTasks] = useState([]);
  const [tasks, dispatch] = useReducer(todoReducer, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: "ADD_TASK", payload: inputValue });
    setInputValue("");
  }

  console.log(tasks);

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              <span>{task.text}</span>
              <AiFillDelete
                onClick={() =>
                  dispatch({ type: "DELETE_TASK", payload: task.id })
                }
              />
              <AiFillEdit />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
