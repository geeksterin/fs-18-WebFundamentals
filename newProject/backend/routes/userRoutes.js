import express from "express";
import {
  addNewUser,
  getAllUsers,
  registerUser,
  loginUser
} from "../controllers/userController.js";
import uploadPhoto from "../middlewares/uploadPhoto.js";

const router = express.Router();

router.post("/addUser", uploadPhoto.single("photo"), addNewUser);
router.get("/getUsers", getAllUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
export default router;
