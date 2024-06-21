import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, setInputValue } from "./todoSlice";
import { AiFillDelete } from "react-icons/ai";

function Todo() {
  const dispatch = useDispatch();
  const initState = useSelector((state) => {
    return state.shyam;
  });
  console.log(initState);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTask());
  }

  //   console.log(initState.tasks, initState.inputValue);

  return (
    <>
      <form method="post" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your task"
          value={initState.inputValue}
          onChange={(e) => dispatch(setInputValue(e.target.value))}
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {initState.tasks.map((task, index) => {
          return (
            <li key={index}>
              <span>{task.text}</span>
              <AiFillDelete onClick={() => dispatch(deleteTask(task.id))} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Todo;
