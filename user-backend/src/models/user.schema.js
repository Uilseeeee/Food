import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String },
  password: { type: String },
  phonenumber: { type: String },
  address: { String }
});

export default mongoose.model("Users", userSchema);
