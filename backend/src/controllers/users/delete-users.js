import mongoose from "mongoose";
import { Users } from "../../models/user.schema.js";

export const DeleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await Users.findByIdAndDelete(id);
        res.json({ message: "User deleted successfully", user: deleteUser });
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
    };
