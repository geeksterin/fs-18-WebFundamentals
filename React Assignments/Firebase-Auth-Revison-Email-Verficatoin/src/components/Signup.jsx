import React, { useState } from "react";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        pass
      );
      await sendEmailVerification(userCredential.user);

      alert("Email Verification link has been sent on your provided email");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={signup}>
        <br />
        <input
          onChange={(e) => setEmail(e.currentTarget.value)}
          type="text"
          placeholder="Email"
        />
        <br />
        <input
          onChange={(e) => setPass(e.currentTarget.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
}
