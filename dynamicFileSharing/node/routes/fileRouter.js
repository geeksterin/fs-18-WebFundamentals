import express from "express";

import { uploadFile } from "../controllers/fileController.js";
import upload from "../middlewares/upload.js";

const FileRouter = express.Router();

FileRouter.post("/uploadFiles", upload.single("file"), uploadFile);

FileRouter.get("/", getAllFiles);

FileRouter.post("/download", getSingleFile);

FileRouter.post("/sendEmailWithFileLink");

export default FileRouter;
