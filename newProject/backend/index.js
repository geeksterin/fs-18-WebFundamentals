import express from "express";
import cors from "cors";
import router from "./routes/userRoutes.js";
import mongoose from "mongoose";

const port = 6969;
const hostname = "localhost";

mongoose
  .connect("mongodb://127.0.0.1:27017/geeksterFileUpload")
  .then(() => app.listen(port, hostname, () => console.log("Server Started")));

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/", router);
