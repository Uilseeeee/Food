import express from "express";
import { createCategory } from "../controllers/category/create-category.js";
import { createFood } from "../controllers/foods/create-food.js";
import { createOrder } from "../controllers/order/CreateOrder.js";  
import { getOrder } from "../controllers/order/get-order.js";
import { updateFood } from "../controllers/foods/update-food.js";

export const foodsRouter = express.Router();

foodsRouter.post("/category", createCategory);
foodsRouter.post("/", createFood);
foodsRouter.post("/order", createOrder);
foodsRouter.get("/order/:id", getOrder);
foodsRouter.patch("/:id", updateFood);