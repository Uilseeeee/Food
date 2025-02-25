import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String , required : true , unique:true}, 
  password: { type: String },
  phonenumber: { type: String },
  address: { String }
});

export const Users = mongoose.model("Users", userSchema);