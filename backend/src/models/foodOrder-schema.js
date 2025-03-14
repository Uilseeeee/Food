import mongoose from "mongoose";
const { Schema, model } = mongoose;

// foodOrderItems
export const orderSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "Users" },
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "delivered", "cancelled"],
      default: "pending",
    },
    foodOrderItems: [
      {
        food: { type: Schema.Types.ObjectId, required: true, ref: "Foods" },
        quantity: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const Order = model("Order", orderSchema);
export default Order;
