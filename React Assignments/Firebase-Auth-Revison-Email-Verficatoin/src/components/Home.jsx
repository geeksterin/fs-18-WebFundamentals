import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    if (auth.currentUser == null || auth.currentUser.emailVerified == false) {
      navigate("/login");
    }
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div>
      <h1>Home</h1>
      {auth.currentUser ? (
        <div>
          {" "}
          {auth.currentUser.email} <button onClick={logout}>Logout</button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
