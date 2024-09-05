import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:6969/getUsers")
      .then((result) => setUsers(result.data));
  }, []);
  return (
    <>
      <h2>Our users</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Photo</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0
            ? users.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <img src={user.photo} alt="Chand sa roshan chehra" />
                    </td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    </>
  );
}

export default Home;
