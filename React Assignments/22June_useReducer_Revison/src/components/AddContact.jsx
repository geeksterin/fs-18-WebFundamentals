import React, { useState } from "react";

export default function AddContact({ contactDispatch }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div>
      <h1>Add Contact</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          contactDispatch({
            type: "ADD",
            payload: {
              name: name,
              phone: phone,
            },
          });
        }}
      >
        <br />
        <input
          onChange={(e) => setName(e.currentTarget.value)}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          onChange={(e) => setPhone(e.currentTarget.value)}
          type="text"
          placeholder="Phone"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
