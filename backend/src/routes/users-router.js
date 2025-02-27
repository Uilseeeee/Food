import express from "express";
import { userSignup } from "../controllers/users/create-users.js";
import { DeleteUser } from "../controllers/users/delete-users.js";

export const userRouter = express.Router();

userRouter.post("/", userSignup);
userRouter.delete("/:id", DeleteUser);