/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
function FileList({ savedFiles }) {
  return (
    <>
      <h3>Uploaded Files</h3>
      <ul>
        {savedFiles.map((file) => {
          return (
            <li key={file.uuid}>
              <a href={file.downloadLink}>{file.filename}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default FileList;
