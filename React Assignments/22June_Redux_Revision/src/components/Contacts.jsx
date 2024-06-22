import React from "react";
import { removeContact } from "../slices/contactSlice";
import { useDispatch } from "react-redux";

export default function Contact({ contacts }) {
  const d = useDispatch();

  return (
    <div>
      <hr />
      <h1>All Contacts</h1>
      {contacts.map((item, index) => (
        <div>
          <p>{item.name}</p>
          <p>{item.phone}</p>
          <button
            onClick={() => {
              d(
                removeContact({
                  index: index,
                })
              );
            }}
          >
            Delete
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}
