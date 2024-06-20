import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

import { auth } from "../firebase.js";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const obj = await createUserWithEmailAndPassword(auth, email, pass);
      await updateProfile(obj.user, {
        displayName: name,
      });
      await sendEmailVerification(obj.user);
      alert("Activate your account by the link send on you email");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSignup}>
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
        <input
          onChange={(e) => setName(e.currentTarget.value)}
          type="text"
          placeholder="Name"
        />
        <br />
        <input type="submit" value="Signup" />
      </form>
    </div>
  );
}
