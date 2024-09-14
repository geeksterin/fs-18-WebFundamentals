/* eslint-disable react/prop-types */
function FileUpload({ handleChange, handleSubmit }) {
  return (
    <>
      <h3>Upload Files</h3>
      <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="file" onChange={handleChange} name="file" />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}

export default FileUpload;
