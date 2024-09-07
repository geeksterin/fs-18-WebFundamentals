import mongoose from "mongoose";
// import { v4 as uuidv4 } from 'uuid';

const registerSchema = new mongoose.Schema({
  // id: {
  //   type: String,
  //   default: () => uuidv4()
  // },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const registerModel = mongoose.model("register", registerSchema);
export default registerModel;
