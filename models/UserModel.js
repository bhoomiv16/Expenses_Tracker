import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username field is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email field is required"],
  },
  password: {
    type: String,
    required: [true, "Password field is required"],
    select: false,
    minLength: [5, "Min length of characters is 5"],
  },
  confirmPassword: {
    type: String,
    required: [true, "Confirm password field is required"],
  },
});

let UserModel = mongoose.model("UserCollection", UserSchema);
export default UserModel;
