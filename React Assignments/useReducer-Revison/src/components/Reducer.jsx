import { useReducer, useState } from "react";

/*

action = {
  type: String,
  payload: String
}
*/

const todoReducer = (state, action) => {
  if (action.type == "ADD") {
    state = [...state, action.payload];
  } else if (action.type == "DEL") {
    let temp = [...state];
    temp.splice(action.payload, 1);
    state = temp;
  }
  return state;
};

function ReducerComponent() {
  const [text, setText] = useState("");

  const [todos, dispatch] = useReducer(todoReducer, []);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({
            type: "ADD",
            payload: text,
          });
        }}
      >
        <input onChange={(e) => setText(e.currentTarget.value)} type="text" />
        <input type="submit" />
      </form>

      {todos.map((item, index) => (
        <div>
          <p>{item}</p>
          <button
            onClick={() =>
              dispatch({
                type: "DEL",
                payload: index,
              })
            }
          >
            Delete
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ReducerComponent;
