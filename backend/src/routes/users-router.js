import express from "express";
import { userSignup } from "../controllers/users/create-users.js";
import { DeleteUser } from "../controllers/users/delete-users.js";
import { getUsers } from "../controllers/users/get-users.js";
import { createLogin } from "../controllers/login/login.js";

export const userRouter = express.Router();

userRouter.post("/", userSignup);
userRouter.delete("/:id", DeleteUser);
userRouter.get("/:id", getUsers);
userRouter.post("/login", createLogin);