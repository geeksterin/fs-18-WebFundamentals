import express from "express";

import {
  getAllFiles,
  uploadFile,
  downloadFile,
  sendEmailWithDownloadLink,
} from "../controllers/fileController.js";
import upload from "../middlewares/upload.js";

const FileRouter = express.Router();

FileRouter.post("/uploadFiles", upload.single("file"), uploadFile);

FileRouter.get("/", getAllFiles);

FileRouter.get("/files/download/:uuid", downloadFile); // {uuid: 9db80295-1eb3-49ed-9529-9b98f4162c76}

FileRouter.post("/files/send", sendEmailWithDownloadLink);

export default FileRouter;
