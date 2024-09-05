import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:4000/users");
      setUsers(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      {users.length > 0 ? (
        <table>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
          </tr>
          {users.map((user, index) => {
            return (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.city}</td>
              </tr>
            );
          })}
        </table>
      ) : (
        ""
      )}

      <Link to="/newUser">Add New User</Link>
    </>
  );
}

export default App;
