
import { Router } from "express";
import { getUsers } from "../resolvers/users/get-users.js";
import { createUser } from "../resolvers/users/create-users.js";
import { deleteUser } from "../resolvers/users/delete-users.js";
import { updateUser } from "../resolvers/users/update-users.js";
import { createLogin } from "../resolvers/login/create-login.js";
import { authorization } from "../middleWare/authorization.js";

export const userRouter = Router();

userRouter.get("/", authorization, getUsers)
userRouter.post("/", createUser)
userRouter.put("/", authorization, updateUser)
userRouter.delete("/", authorization, deleteUser)
userRouter.post("/login", createLogin)