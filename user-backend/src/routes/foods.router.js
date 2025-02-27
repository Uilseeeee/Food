import express from "express";
import { addFood } from "../controllers/foods/create-users";

export const foodsRouter = express.Router();

foodsRouter.post("/", userSignup);
