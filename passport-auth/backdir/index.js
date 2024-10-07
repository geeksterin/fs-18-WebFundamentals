import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import session from "express-session";
import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "./models/User.js";
import bcrypt from "bcrypt";

const PORT = process.env.PORT;
const CONNECTIONSTRING = process.env.MONGOSTRING;
const SECRET = process.env.SESSION_SECRET;

const app = express();

//MIDDLEWARES
app.use(cors({ origin: "http://localhost:5174", credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//CREATING SESSION WITH EXPRESS-SESSION
app.use(
  session({
    secret: SECRET,
    saveUninitialized: false, // do not save the session if there is no info
    resave: false, //when to modify or resave the session. resave=>false: do not resave if no info has changed
    cookie: { secure: false, maxAge: 60 * 60 * 1000 }, //1 hour
  })
);

// PASSPORT MIDDLEWARE
app.use(passport.initialize()); //NOT REQUIRED IN LATEST VERSION, BUT NO HARM IN USING
app.use(passport.session());

//LOCAL STRATEGY
passport.use(
  "local",
  new LocalStrategy(
    { usernameField: "email" },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email });
        if (!user) return done(null, false, { message: "Incorrect Email" });

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch)
          return done(null, false, { message: "Incorrect Password" });

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

// Routes
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ message: "Logged in successfully", user: req.user });
});

//PROTECTED ROUTE
app.get("/profile", (req, res) => {
  if (req.isAuthenticated()) {
    res.json({ user: req.user });
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

app.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Error logging out" });
    }
    res.json({ message: "Logged out successfully" });
  });
});

mongoose
  .connect(CONNECTIONSTRING)
  .then(() =>
    app.listen(PORT, () => console.log("SERVER STARTED AT PORT " + PORT))
  )
  .catch((err) => console.log(err));
