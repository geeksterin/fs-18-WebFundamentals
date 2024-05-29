// getting the functions as props as using spread on the props object
function Form({ handleSubmit, inputValue, setInputValue, isEditing }) {
  return (
    <form action="" onSubmit={handleSubmit}>
      {/* Making input a controlled component */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/* when editing, show "Edit Task", otherwise show "Add Task" */}
      <button type="submit">
        {isEditing === false ? "Add Task" : "Edit Task"}
      </button>
    </form>
  );
}
export default Form;
