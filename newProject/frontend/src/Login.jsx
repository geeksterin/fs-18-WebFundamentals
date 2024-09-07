import axios from "axios";
import { useState } from "react";

function Login() {
  const [emailOrUser, setEmailOrUser] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:6969/login", { emailOrUser, password })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your email / username"
        name="emailOrUser"
        value={emailOrUser}
        onChange={(e) => setEmailOrUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Enter your password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
