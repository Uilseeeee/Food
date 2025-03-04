import mongoose from "mongoose";
import Order from "../../models/foodOrder-schema.js";

export const createOrder = async (req, res) => {
  try {
    const { user, totalPrice } = req.body;
    const newOrder = await Order.create({
      user,
      totalPrice,
      status: "pending",
    });
    res.json({ message: "Order created successfully", order: newOrder });
  } catch (err) {
    console.error(err);  // Log the error
    res.status(500).json({ message: "An error occurred while creating the order" });
  }
  try {
    const { user, totalPrice } = req.body;
    const newOrder = await Order.create({
      user,
      totalPrice,
      status: "pending",
    });
    res.json({ message: "Order created successfully", order: newOrder });
  } catch (err) {
    console.error(err);  // Log the error
    res.status(500).json({ message: "An error occurred while creating the order" });
  }
  

};
