
import UserModel from "../models/UserModel.js";

export const register =async (req, res, next) => {
  try {
    let { username, email, password, confirmPassword } = req.body;
    //check if user already exists
    let existingEmail = await UserModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    //Create new user
    let newUser = await UserModel.create({
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    res.status(201).json({
      username:newUser.username,
      email:newUser.email,
      password:newUser.password,
      confirmPassword:newUser.confirmPassword
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error:error.message
    });
  }
};

export const login = async (req, res, next) => {
  try {
    let { email, password } = req.body;
    //check if user exists
    let existingUser = await UserModel.findOne({ email });
    if (!existingUser) {
      res.status(400).json({
        message: "Invalid credentials",
      });
    }
    res.status(200).json({
      id:existingUser._id,
      username:existingUser.username,
      email:existingUser.email,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error:error.message
    });
  }
};
