import { generateUniqueID } from "../utils/generateUniqueID.js";
import FileUpload from "../models/fileUpload.js";
import { sendEmail } from "../services/emailService.js";

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
  // const data = await FileUpload.find({}).select("-path", "-size");
  try {
    const data = await FileUpload.find({}, "filename uuid createdAt");
    const dataToSend = data.map((file) => {
      return {
        ...file._doc,
        downloadLink: `${req.protocol}://${req.get(
          "host"
        )}/api/files/download/${file.uuid}`,
      };
    });
    // console.log(dataToSend);
    res.json(dataToSend);
  } catch (err) {
    res.status(500).json("There is a problem. Contact Server Admin");
  }
}

export async function downloadFile(req, res) {
  try {
    const file = await FileUpload.findOne({ uuid: req.params.uuid }); // {uuid: 9db80295-1eb3-49ed-9529-9b98f4162c76}
    if (!file)
      res
        .status(404)
        .json({ error: "Requested file was not found on the server" });

    res.download(file.path, file.filename); //Content-Disposition: attachment
  } catch (err) {
    res
      .status(500)
      .json({ error: "Could not download file. Contact System Admin" });
  }
}

export async function sendEmailWithDownloadLink(req, res) {
  try {
    const { email, uuid } = req.body;
    if (!email || !uuid)
      res.status(404).json({ error: "UUID & Email are required" });

    const file = await FileUpload.findOne({ uuid });
    if (!file)
      res.status(404).json({ error: "File with given UUID not found" });

    const downloadLink = `${req.protocol}://${req.get(
      "host"
    )}/api/files/download/${file.uuid}`;

    const mailOptions = {
      from: process.env.UESR_EMAIL,
      to: email,
      subject: "Email Download Link",
      text: "Here's your download link: " + downloadLink,
      html:
        "<h3>Here's your download link: <a href='" +
        downloadLink +
        "'>Download File </a></h3>",
    };

    await sendEmail(mailOptions);
    res.json({ message: "Email sent successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error in sending email" });
  }
}
