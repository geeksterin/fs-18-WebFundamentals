import userModel from "../models/userModel.js";

export async function addNewUser(req, res) {
  const { name, email } = req.body;
  const photo = req.file.path;
  const dataToSave = new userModel({ name, email, photo });
  const isDataSaved = await dataToSave.save();
  if (isDataSaved) {
    res.status(201).send("User Registered Successfully");
  } else res.status(400).send("Some error, check back later");
}

export async function getAllUsers(req, res) {
  const users = await userModel.find();
  res.send(users);
}
