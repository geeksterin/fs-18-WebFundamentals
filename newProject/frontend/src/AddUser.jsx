import { useState } from "react";
import axios from "axios";

function AddUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("photo", photo);

    axios
      .post("http://localhost:6969/addUser", data)
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter Email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="file"
        name="photo"
        onChange={(e) => setPhoto(e.target.files[0])}
      />
      <button type="submit">Register</button>
    </form>
  );
}

export default AddUser;
