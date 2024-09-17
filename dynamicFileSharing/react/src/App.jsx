import { useEffect, useState } from "react";
import axios from "axios";
import FileUpload from "./components/FileUpload";
import FileList from "./components/FileList";
import SendEmailForm from "./components/SendEmailForm";

function App() {
  const [savedFiles, setSavedFiles] = useState(null);

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

  async function handleSubmit(file) {
    try {
      const data = new FormData();
      data.append("file", file);

      const response = await axios.post(
        "http://localhost:8081/api/uploadFiles",
        data
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <h1>File Sharing Application</h1>
      <FileUpload handleSubmit={handleSubmit} />
      {savedFiles && <FileList savedFiles={savedFiles} />}
      {/* {savedFiles ? <FileList savedFiles={savedFiles} /> : ""} */}

      <SendEmailForm />
    </>
  );
}

export default App;
