import express from "express";
import { userSignup } from "../controllers/users/create-users.js";

export const userRouter = express.Router();

userRouter.post("/", userSignup);
