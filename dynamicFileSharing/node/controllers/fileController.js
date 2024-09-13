import { generateUniqueID } from "../utils/generateUniqueID.js";
import FileUpload from "../models/fileUpload.js";

export async function uploadFile(req, res) {
  try {
    const { filename, size, path } = req.file;
    const uuid = generateUniqueID();
    const dataToSave = new FileUpload({ filename, size, path, uuid });
    await dataToSave.save();

    res.status(201).json({
      message: "File uploaded successfully",
      uuid,
      downloadLink: `${req.protocol}://${req.get("host")}/api/files/${uuid}`,
    });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}

export async function getAllFiles(req, res) {
  const data = await FileUpload.find({});
}
