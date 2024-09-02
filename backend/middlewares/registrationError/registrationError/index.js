import express from "express";
import {
  validateUserData,
  errorHandler,
} from "./registrationErrorMiddleware.js";

const app = express();
const port = 4000;
const hostname = "localhost";
app.use(express.json());

app.get("/users", (req, res) => {
  res.send("Hello World");
});

app.post("/register", validateUserData, (req, res) => {
  res.status(201).json({ message: "Registration Successful" });
});

app.use(errorHandler);

app.listen(port, hostname, () => console.log("Server started"));
