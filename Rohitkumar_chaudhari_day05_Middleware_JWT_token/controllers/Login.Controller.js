const Login = require("../models/Login.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sKey = "qwertyuiop";

const SignUp = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const existingUser = await Login.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "User alredy exist" });
    }
    const hashPassowrd = await bcrypt.hash(password, 10);
    const result = await Login.create({
      email: email,
      username: username,
      password: hashPassowrd,
    });

    const token = jwt.sign({ email: result.email, id: result._id }, sKey);
    res.status(201).json({ user: result, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const SignIn = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const existingUser = await Login.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "User Not found" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Inavalid credentials" });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      sKey
    );
    res.status(201).json({ user: existingUser, token: token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = {
  SignUp,
  SignIn,
};
