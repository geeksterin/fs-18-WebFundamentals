/* eslint-disable react/prop-types */
import axios from "axios";

function Dashboard({ setIsLoggedIn }) {
  async function handleLogout() {
    const response = await axios.post(
      "http://localhost:8080/api/user/logout",
      {},
      { withCredentials: true }
    );
    if (response.data.message === "Logout successfully") setIsLoggedIn(false);
  }
  return (
    <>
      <h2>Welcome Admin</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Dashboard;
