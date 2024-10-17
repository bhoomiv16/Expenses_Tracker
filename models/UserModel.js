import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: [true, "Username field is required"],
    trim: true,
    minlength: [3, 'Username must be at least 3 characters long'],
    maxlength: [30, 'Username cannot exceed 30 characters']
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email field is required"],
    lowercase:true,
  },
  photo: {
    type: String,
    default: 'https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png'
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
