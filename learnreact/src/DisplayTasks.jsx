/* eslint-disable react/prop-types */
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

// getting the functions as props as using spread on the props object
function DisplayTasks({
  tasks,
  completedTasks,
  handleDelete,
  handleCompleted,
  handleEdit,
}) {
  return (
    <ul>
      {tasks.map((task, index) => {
        return (
          <li
            key={index}
            // if the id is in the completedTasks array, do line-through, other none
            style={
              completedTasks.includes(task.id)
                ? { textDecoration: "line-through" }
                : { textDecoration: "none" }
            }
          >
            {task.task}
            <DeleteOutlineIcon onClick={() => handleDelete(task.id)} />
            
            {/* Show edit icon only if the task is not complete */}
            {completedTasks.includes(task.id) ? (
              ""
            ) : (
              <EditIcon onClick={() => handleEdit(task.id)} />
            )}
            <CheckIcon onClick={() => handleCompleted(task.id)} />
          </li>
        );
      })}
    </ul>
  );
}
export default DisplayTasks;
