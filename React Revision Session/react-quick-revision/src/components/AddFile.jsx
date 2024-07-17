import { useState } from "react";

export default function AddFile({ addFile }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addFile(title, url);
        }}
      >
        <h1>Add Image</h1>
        <input
          onChange={(e) => setTitle(e.currentTarget.value)}
          type="text"
          placeholder="title"
          required
        />
        <br />
        <input
          onChange={(e) => setUrl(e.currentTarget.value)}
          type="url"
          placeholder="img url"
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}
