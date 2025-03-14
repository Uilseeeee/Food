import mongoose from "mongoose";

const { Schema } = mongoose;

// schema update
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  phonenumber: { type: String },
  address: { type: String },
  role : { type: String, default: "user" },
  isVerified: { type: Boolean, default: false },
});

export const Users = mongoose.model("Users", userSchema);
