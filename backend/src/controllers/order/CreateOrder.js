import mongoose from "mongoose";
import { Users } from "../../models/user.schema.js";

export const createOrder = async (req, res) => {
try{
    const { user, totalPrice, } = req.body;
    const newOrder = await Users.create({
        user,
        totalPrice,
        createdAt,
        updatedAt,
    });
    res.json({ message: "Order created successfully", order: newOrder });
}catch(err){}
};