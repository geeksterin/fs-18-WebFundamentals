import express from "express";
import mongoose from "mongoose";
import router from "./routes/userRoutes.js";
import cors from "cors";

const port = 4000;
const hostname = "127.0.0.1";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router);

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
