import AddFile from "./components/AddFile.jsx";
import { useState } from "react";

function App() {
  const [files, setFiles] = useState([]);
  const [bin, setBin] = useState([]);

  function addFile(title, img) {
    const obj = {
      title: title,
      url: img,
    };
    setFiles([...files, obj]);
  }

  function deleteFile(index) {
    let temp = [...files];
    // Before deleting from this array push the element to be delted in the bin
    setBin([...bin, temp[index]]);
    temp.splice(index, 1);
    setFiles(temp);
  }

  function restore(index) {
    let temp = [...bin];
    // Before deleting from this bin array push the element to be delted in the files array
    setFiles([...files, bin[index]]);
    temp.splice(index, 1);
    setBin(temp);
  }

  function emptyBin() {
    setBin([]);
  }

  function restoreAll() {
    setFiles([...files, ...bin]);
    setBin([]);
  }

  return (
    <div>
      <AddFile addFile={addFile} />

      <div
        style={{ display: "flex", gap: "10px", justifyContent: "space-evenly" }}
      >
        {files.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.title}</p>
              <button onClick={() => deleteFile(index)}>Delete</button>
              <img width="100px" height="90px" src={item.url} />
            </div>
          );
        })}
      </div>

      <hr />
      <h3 style={{ textAlign: "center" }}>Bin</h3>
      <button onClick={emptyBin}>Empty Bin</button>
      <button onClick={restoreAll}>Restore All</button>
      <div
        style={{ display: "flex", gap: "10px", justifyContent: "space-evenly" }}
      >
        {bin.map((item, index) => {
          return (
            <div key={index}>
              <p>{item.title}</p>
              <button onClick={() => restore(index)}>Restore</button>
              <img width="100px" height="90px" src={item.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
