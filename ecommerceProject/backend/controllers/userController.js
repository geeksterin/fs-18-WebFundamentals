import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../services/tokenGenerate.js";

export async function registerUser(req, res) {
  try {
    let { firstname, lastname, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;
    const user = new userModel({ firstname, lastname, email, password, role });
    await user.save();
    res.status(201).json({ message: "success" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
}

export async function loginUser(req, res) {
  const { email, password } = req.body;
  //find user
  //match password

  const checkUser = await userModel.findOne({ email: email }).exec();
  //   console.log(checkUser);
  if (!checkUser) {
    res.status(404).json({ error: "Invalid Credentials" });
  }

  const check = bcrypt.compare(password, checkUser.password);
  if (!check) res.status(404).json({ error: "Invalid Credentials" });

  //CREATE A TOKEN
  console.log(generateToken());

  // COOKIE, ls 

  //LOG USER IN

}
