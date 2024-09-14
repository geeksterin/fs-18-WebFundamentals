import { useEffect, useState } from "react";
import axios from "axios";
import FileUpload from "./components/FileUpload";
import FileList from "./components/FileList";
import SendEmailForm from "./components/SendEmailForm";

function App() {
  const [files, setFiles] = useState(null);
  const [savedFiles, setSavedFiles] = useState(null);

  const [email, setEmail] = useState("");
  const [uuid, setUUID] = useState("");

  useEffect(() => {
    fetchFiles();
  }, []);

  async function fetchFiles() {
    try {
      const response = await axios.get("http://localhost:8081/api");
      // console.log(response.data);
      setSavedFiles(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(e) {
    setFiles(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("file", files);

      const response = await axios.post(
        "http://localhost:8081/api/uploadFiles",
        data
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

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
      <h1>File Sharing Application</h1>
      <FileUpload handleChange={handleChange} handleSubmit={handleSubmit} />
      {savedFiles && <FileList savedFiles={savedFiles} />}
      {/* {savedFiles ? <FileList savedFiles={savedFiles} /> : ""} */}

      <SendEmailForm
        handleEmailSubmit={handleEmailSubmit}
        email={email}
        uuid={uuid}
        setEmail={setEmail}
        setUUID={setUUID}
      />
    </>
  );
}

export default App;
