import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";

const ecomRouter = express.Router();

ecomRouter.post("/user/register", registerUser);
ecomRouter.post("/user/login", loginUser);

export default ecomRouter;
