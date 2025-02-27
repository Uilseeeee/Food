import mongoose from "mongoose";
const  {Schema, model} = mongoose;

 const orderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
  totalPrice: { type: Number, required: true },
//   foodOrderItems: { type: String },
  status: {
    type: String,
    enum: ["pending", "delivered", "cancelled"],
    default: "pending",
  },
  createdAt: { type: Date },
  updatedAt: { type: Date },
});
