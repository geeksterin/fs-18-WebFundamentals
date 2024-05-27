import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";

function TodoList() {
  // Any component / element whose value/innerHTML is decided by react, and how that value changes, that too is determind by react, such a component is called a controlled component.
  // To make a form element controlled, you need to set 2 attributes, value and onChange

  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTasks([...tasks, inputValue]);
  }

  function handleDelete(indexToDelete) {
    setTasks(
      tasks.filter((task, index) => {
        return index !== indexToDelete;
      })
    );
  }
//   console.log(tasks);

  return (
    <>
      <h1>Todo List</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task, index) => {
          return (
            <li key={index}>
              {task}
              <DeleteOutlineIcon onClick={() => handleDelete(index)} />
              <EditIcon />
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default TodoList;
