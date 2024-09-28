import jwt from "jsonwebtoken";
import { userModel } from "../models/userModel.js";
import "dotenv/config";

async function authMiddleware(req, res, next) {
  try {
    const { auth_token } = req.cookies;

    if (!auth_token) return;

    const decoded_token = jwt.verify(auth_token, process.env.SECRET);

    const loggedInUser = await userModel.findById(decoded_token.userID);

    if (!loggedInUser) res.status(500).json({ message: "User not found" });

    req.user = loggedInUser;
    // console.log(req.user);
    next();
  } catch (err) {
    console.log(err);
  }
}

export default authMiddleware;
