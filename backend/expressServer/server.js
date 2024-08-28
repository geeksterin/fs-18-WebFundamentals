let cars = [
  { id: 1, model: "tata", make: 2000 },
  { id: 2, model: "maruti", make: 2000 },
  { id: 3, model: "honda", make: 2000 },
  { id: 4, model: "mahindra", make: 2000 },
  { id: 5, model: "toyota", make: 2000 },
  { id: 6, model: "ford", make: 2000 },
];

import express from "express";
const app = express();

app.use(express.urlencoded({ extended: false })); //allow data in body with incoming requests

app.use(express.json()); //allow only JSON data in body

const port = 6969;
const hostname = "127.0.0.1";

app.get("/products", (req, res) => {
  res.status(200).send(cars);
});

app.post("/addProduct", (req, res) => {
  //   console.log(req.body); //{"id", "make", "model"}
  const newCar = req.body;
  cars.push(newCar);
  res.send(cars);
});

app.put("/editProduct/:id", (req, res) => {
  const { id } = req.params;
  //Use regex to match id to a number
  // if number greater than 6, send an error message
  const dataToEdit = req.body;

  const updatedCars = cars.map((car) => {
    return car.id === Number(id) ? dataToEdit : car;
  });
  res.send(updatedCars);
});

app.delete("/deleteProduct/:id", (req, res) => {
  const { id } = req.params;
  //Use regex to match id to a number
  // if number greater than 6, send an error message
  const remainingCars = cars.filter((car) => {
    return car.id !== Number(id);
  });
  res.send(remainingCars);
});

app.listen(port, hostname, () => console.log("Server started at port " + port));
