import Login from "./Login";
import Register from "./Register";

function Home() {
  return (
    <>
      <h1>Welcome to Firebase Demo</h1>
      <h2>Login</h2>
      <Login />
      <h2>Register</h2>
      <Register />
    </>
  );
}

export default Home;
