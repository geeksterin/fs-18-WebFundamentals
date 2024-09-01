import express from "express";
import mongoose from "mongoose";

const port = 4000;
const hostname = "127.0.0.1";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// mongoose
//   .connect("mongodb://127.0.0.1:27017/geekster")
//   .then(() => app.listen(port, hostname, () => console.log("Server started")))
//   .catch((err) => console.log(err));

try {
  const connection = await mongoose.connect(
    "mongodb://127.0.0.1:27017/geekster"
  );
  if (connection)
    app.listen(port, hostname, () => console.log("Server started"));
} catch (err) {
  console.log(err);
}

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    // match: /[a-zA-Z ]{3,50}/
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 70,
    // match: /[0-9]{2}/
  },
  city: {
    type: String,
    required: true,
  },
  //   email: {
  //     type: String,
  //     unique: true,
  //     lowercase: true,
  //     // match: /[a-z0-9\.\_]+\@[a-z0-9]+\.[a-z]{2,5}/
  //   },
});

const userModel = mongoose.model("user", userSchema);

app.get("/users", async (req, res) => {
  const dataFromDB = await userModel.find();
  res.send(dataFromDB);
});

app.post("/newUser", async (req, res) => {
  try {
    const dataToSave = new userModel(req.body);
    const newUser = await dataToSave.save();
    res.status(201).send(newUser);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
});

app.delete("/deleteUser/:id", async (req, res) => {
  const id = req.params.id;
  //   const { id } = req.params;

  const deletedData = await userModel.findByIdAndDelete(id);
  if (deletedData) {
    res.status(200).send("User Deleted");
  } else {
    res.status(500).send("User could not be deleted");
  }
});
