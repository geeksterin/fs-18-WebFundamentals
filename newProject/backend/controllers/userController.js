import userModel from "../models/userModel.js";
import path from "path";

export async function addNewUser(req, res) {
  const { name, email } = req.body;
  const photo = req.file.path;
  const dataToSave = new userModel({ name, email, photo });
  const isDataSaved = await dataToSave.save();
  if (isDataSaved) {
    res.status(201).send("User Registered Successfully");
  } else res.status(400).send("Some error, check back later");
}

export async function getAllUsers(req, res) {
  try {
    const users = await userModel.find();
    const usersWithPhotos = users.map((user) => {
      return {
        // 'uploads\\Kartik Sharma-4cb1f4b6-6d5e-45e4-bcc9-7df95519dc2b.jpeg'
        ...user._doc,
        photo: `${req.protocol}://${req.get("host")}/uploads/${path.basename(
          user.photo
        )}`,
      };
    });
    res.send(usersWithPhotos);
  } catch (err) {
    res.send("Error: " + err);
  }
}


// AUTHENTICATION: bcrypt(encryption)
// & AUTHORISATION: (JWT)JSON Web Tokens / Passport
// PROTECTED ROUTES




// NawabKhan_cuteBoy => e4wsd9_dnsdg3sdr_dst434rasdfsegnkdsgnklsdfnlsdfk123efg


