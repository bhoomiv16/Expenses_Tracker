import UserModel from "../models/UserModel.js";

export const register =async (req, res, next) => {
  let { username, email, password, confirmPassword } = req.body;
  try {
    let existingEmail = await UserModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    let newUser = UserModel.create({
      username: username,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    });
    res.status(201).json({
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const login = async (req, res, next) => {
  let { email, password } = req.body;
  try {
    let existingEmail = await UserModel.findOne({ email });
    if (!existingEmail) {
      res.status(400).json({
        message: "User doesn't exists,Please register",
      });
    }
    res.status(200).json({
      message: "Logged in successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
