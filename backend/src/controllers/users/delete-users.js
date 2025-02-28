import mongoose from "mongoose";
import { Users } from "../../models/user.schema.js";

export const DeleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deleteUser = await Users.findByIdAndDelete(id);
        res.json({ message: "User deleted successfully", user: deleteUser });

        if (!deleteUser) {
            return res.status(404).json({ message: "User not found" });
        }
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
    };
