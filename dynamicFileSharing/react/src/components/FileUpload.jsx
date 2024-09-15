/* eslint-disable react/prop-types */
import { useState } from "react";

function FileUpload({ handleSubmit }) {
  const [files, setFiles] = useState(null);
  function handleChange(e) {
    setFiles(e.target.files[0]);
  }
  function handleSubmission(e) {
    e.preventDefault();
    if (files) {
      handleSubmit(files);
      setFiles(null);
    }
  }
  return (
    <>
      <h3>Upload Files</h3>
      <form action="" onSubmit={handleSubmission} encType="multipart/form-data">
        <input type="file" onChange={handleChange} name="file" />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}

export default FileUpload;
