/* eslint-disable react/prop-types */

import { useState } from "react";
import axios from "axios";

function SendEmailForm() {
  const [email, setEmail] = useState("");
  const [uuid, setUUID] = useState("");

  async function handleEmailSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/api/files/send",
        { email, uuid }
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <h3>Send File By Email</h3>
      <form action="" onSubmit={handleEmailSubmit}>
        <input
          type="text"
          placeholder="Recipient's Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="File UUID"
          value={uuid}
          onChange={(e) => setUUID(e.target.value)}
        />
        <button type="submit">Send Email</button>
      </form>
    </>
  );
}

export default SendEmailForm;
