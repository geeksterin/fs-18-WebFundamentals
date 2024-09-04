import express from "express";
import { addNewUser, getAllUsers } from "../controllers/userController.js";
import uploadPhoto from "../middlewares/uploadPhoto.js";

const router = express.Router();

router.post("/addUser", uploadPhoto.single("photo"), addNewUser);
router.get("/getUsers", getAllUsers);
export default router;
