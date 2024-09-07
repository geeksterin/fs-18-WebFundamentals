import userModel from "../models/userModel.js";
import registerModel from "../models/registerModel.js";
import path from "path";
import bcrypt from "bcrypt";
import crypto from "crypto";
const saltRounds = 10;



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

export async function registerUser(req, res) {
  // console.log(req.body);
  try {
    let { name, email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    password = hashedPassword;
    const document = new registerModel({
      name,
      email,
      username,
      password,
    });
    await document.save();
    res.status(201).send("User Registered");
  } catch (err) {
    res.status(500).send("There was as error. Come back later");
  }
}

export async function loginUser(req, res) {
  // console.log(req.body);

  const { emailOrUser, password } = req.body;

  const savedUser = await registerModel.findOne({
    $or: [{ email: emailOrUser }, { username: emailOrUser }],
  }).select("-apiKey", "__v");

  if (!savedUser) {
    res.status(404).send("Invalid Credentials");
  }
  const userMatched = await bcrypt.compare(password, savedUser.password);
  if (userMatched) {
    //CREATE A TOKEN, SEND IT TO FRONTEND VIA HEADERS

    res.send("login successfull");
  } else {
    res.status(404).send("Invalid Credentials");
  }
}

// AUTHENTICATION: bcrypt(encryption)
// & AUTHORISATION: (JWT)JSON Web Tokens / Passport
// PROTECTED ROUTES

// const emailRegex = /^[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-].[a-zA-Z]{2,5}$/;
// const userNameRegex = /^[a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+]{4,20}$/;

// let data = {};

// if (emailOrUser.test(emailRegex)) {
//   data.email = emailOrUser;
// } else {
//   data.username = emailOrUser;
// }

// sir we also need to store userId / uuid in case we have to link that user to different collection / table

// jwt.sign(): to create a token
// jwt.decode()
