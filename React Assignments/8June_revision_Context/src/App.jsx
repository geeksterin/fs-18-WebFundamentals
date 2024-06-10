import { useState, createContext, useEffect } from "react";
import B from "./components/B";
import G from "./components/G";

export const MyContext = createContext(null);

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("ashish");

  const increaseCount = () => {
    setCount(count + 1);
  };

  const [authorName, setAuthorName] = useState("");
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    if (authors.length > 0)
      localStorage.setItem("authors", JSON.stringify(authors));
  }, [authors]);

  useEffect(() => {
    if (localStorage.getItem("authors")) {
      let data = JSON.parse(localStorage.getItem("authors"));
      setAuthors(data);
    }
  }, []);

  return (
    <div>
      {/* <MyContext.Provider value={{ count, name, increaseCount }}>
        <B />
      </MyContext.Provider> */}

      <h1>Authors</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setAuthors([...authors, authorName]);
        }}
      >
        <input
          onChange={(e) => setAuthorName(e.currentTarget.value)}
          type="text"
          placeholder="Author Name"
        />
        <input type="submit" />
      </form>

      {authors.map((item, index) => (
        <li>{item}</li>
      ))}
    </div>
  );
}

export default App;
