import mongoose from "mongoose";
const { Schema, model } = mongoose;

export const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "delivered", "cancelled"],
      default: "pending",
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Order = model("Order", orderSchema);
export default Order;
