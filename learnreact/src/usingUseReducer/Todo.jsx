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

      case "EDIT_TASK":
        return state.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text }
            : task
        );
    }
  }

  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [tasks, dispatch] = useReducer(todoReducer, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (isEditing) {
      dispatch({
        type: "EDIT_TASK",
        payload: { id: isEditing.id, text: inputValue },
      });
      setIsEditing(false);
    }
    dispatch({ type: "ADD_TASK", payload: inputValue });
    setInputValue("");
  }

  function handleInitialEdit(e, task) {
    setInputValue(task.text);
    setIsEditing(task);
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
        <button type="submit">
          {isEditing === false ? "Add Task" : "Edit Task"}
        </button>
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
              <AiFillEdit onClick={(e) => handleInitialEdit(e, task)} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
