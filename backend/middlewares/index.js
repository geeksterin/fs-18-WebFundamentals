import express from "express";
import { ipLogger } from "./ipLogger.js";
import { dateLogger } from "./dateLogger.js";

let cars = [
  { id: 1, model: "tata", make: 2000 },
  { id: 2, model: "maruti", make: 2000 },
  { id: 3, model: "honda", make: 2000 },
  { id: 4, model: "mahindra", make: 2000 },
  { id: 5, model: "toyota", make: 2000 },
  { id: 6, model: "ford", make: 2000 },
];

const port = 6969;
const hostname = "127.0.0.1";
const app = express();
app.use(express.json());

app.use(ipLogger);
app.use(dateLogger);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/cars", (req, res) => {
  res.send(cars);
});

app.listen(port, hostname, () =>
  console.log("Server is up & running at port " + port)
);
