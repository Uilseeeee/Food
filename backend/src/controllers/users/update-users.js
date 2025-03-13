import express from "express";
import { Users } from "../../models/user.schema.js";

export const updateUsers = async (req, res) => {
    const { id } = req.params;
    const { email, password, phonenumber, address } = req.body;
    
    try {
        const updateUser = await Users.findByIdAndUpdate(id, {
        email,
        password,
        phonenumber,
        address,
        role,
        orderedFood,
        createdAt,
        updatedAt
        });
        res.json({ message: "User updated successfully", user: updateUser });
    } catch (err) {
        res.json({ message: "Error occured" });
    }
    }