import express from "express";
import { userSignup } from "../controllers/users/create-users.js";
import { DeleteUser } from "../controllers/users/delete-users.js";
import { getUsers } from "../controllers/users/get-users.js";
import { createLogin } from "../controllers/login/login.js";
import { Authorization } from "../middleWare/Authorization.js";
import { updateUsers } from "../controllers/users/update-users.js";

export const userRouter = express.Router();

userRouter.post("/", userSignup);
userRouter.delete("/:id", Authorization, DeleteUser);
userRouter.get("/:id", Authorization, getUsers);
userRouter.post("/login", createLogin);
userRouter.patch("/:id", Authorization, updateUsers);
