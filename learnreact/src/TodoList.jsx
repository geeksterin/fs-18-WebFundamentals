import { useState } from "react";
import Form from "./Form";
import DisplayTasks from "./DisplayTasks";

function TodoList() {
  // Any component / element whose value/innerHTML is decided by react, and how that value changes, that too is determind by react, such a component is called a controlled component.
  // To make a form element controlled, you need to set 2 attributes, value and onChange

  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [completedTasks, setCompletedTasks] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    //check whether to create a new entry or not
    if (isEditing === false) {
      //create a new object
      const obj = {};
      obj.task = inputValue;
      obj.id = Date.now(); // milliseconds from Jan 1 1970 12:00:00 till now
      setTasks([...tasks, obj]); //push the object to the end of the array
    } else {
      let tasksCopy = tasks;
      const taskToEdit = tasksCopy.find((task) => {
        return task.id === isEditing;
      });
      taskToEdit.task = inputValue;

      setTasks(tasksCopy);

      setIsEditing(false); //reset to false, so new tasks can be added
    }

    setInputValue("");
  }

  function handleDelete(idToDelete) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== idToDelete;
      })
    );
  }

  function handleEdit(idToEdit) {
    // console.log(idToEdit);
    const taskToEdit = tasks.find((task) => {
      return task.id === idToEdit;
    });
    // console.log(taskToEdit);
    setInputValue(taskToEdit.task);
    setIsEditing(idToEdit);
  }

  function handleCompleted(idToMarkComplete) {
    setCompletedTasks([...completedTasks, idToMarkComplete]);
  }

  

  return (
    <>
      <h1>Todo List</h1>
      <Form
        handleSubmit={handleSubmit}
        inputValue={inputValue}
        setInputValue={setInputValue}
        isEditing={isEditing}
      />

      <DisplayTasks
        handleCompleted={handleCompleted}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        tasks={tasks}
        completedTasks={completedTasks}
      />
    </>
  );
}
export default TodoList;
