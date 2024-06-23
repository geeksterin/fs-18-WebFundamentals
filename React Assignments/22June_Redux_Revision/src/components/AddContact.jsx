import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addContact } from "../slices/contactSlice";

export default function AddContact({}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const disptach = useDispatch();
  return (
    <div>
      <h1>Add Contact</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          disptach(
            addContact({
              name: name,
              phone: phone,
            })
          );
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
