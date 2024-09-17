import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import FileRouter from "./routes/fileRouter.js";

const port = process.env.PORT;

const app = express();
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", FileRouter);

mongoose
  .connect(process.env.DBCONNECTION)
  .then(() =>
    app.listen(port, () =>
      console.log("Server started on port " + process.env.PORT)
    )
  );
