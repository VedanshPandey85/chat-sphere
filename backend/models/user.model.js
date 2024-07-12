import mongoose from "mongoose";

// here the schema for user is created what attributes the user is going to have
// It is exported in the form of model

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    profilePic: {
      type: String,
      default: "",
    },
  },
  //when user was created , updated or Member since
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
