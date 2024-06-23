import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo } from "./slices/todoSlice";

export default function App() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addTodo({
              title: text,
              description: "Hello",
            })
          );
        }}
      >
        <input onChange={(e) => setText(e.currentTarget.value)} type="text" />
        <input type="submit" />
      </form>

      {todos.map((item, index) => (
        <div>
          <p>{item.title}</p>
          <button
            onClick={() =>
              dispatch(
                removeTodo({
                  index: index,
                })
              )
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
