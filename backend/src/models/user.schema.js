import mongoose from "mongoose";

const { Schema } = mongoose;

// schema update
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String },
  phonenumber: { type: String },
  address: { type: String },
  role: {
    enum: ["user", "admin"],
    default: "user",
  },
  isVerified: { type: Boolean, default: false },
  timestamps: { type: Date, default: Date.now },
});

export const Users = mongoose.model("Users", userSchema);
