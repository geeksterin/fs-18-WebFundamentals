import React from "react";

export default function Contact({ contacts, contactDispatch }) {
  return (
    <div>
      <hr />
      <h1>All Contacts</h1>
      {contacts.map((item, index) => (
        <div>
          <p>{item.name}</p>
          <p>{item.phone}</p>
          <button
            onClick={() =>
              contactDispatch({
                type: "DEL",
                payload: {
                  index: index,
                },
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
