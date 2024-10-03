import { Router } from "express";
import authMiddleware from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.get("/me", authMiddleware, (req, res) => {
  //If you are here, it means user is logged in
  res.json(req.user);
});

export default authRouter;
