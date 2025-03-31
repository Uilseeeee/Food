import express from "express";
import { createCategory } from "../controllers/category/create-category.js";
import { createFood } from "../controllers/foods/create-food.js";
import { createOrder } from "../controllers/order/CreateOrder.js";
import { getOrder } from "../controllers/order/get-order.js";
import { updateFood } from "../controllers/foods/update-food.js";
import { updateCategory } from "../controllers/category/update-category.js";
import { updateOrder } from "../controllers/order/update-order.js";
import { deleteFood } from "../controllers/foods/delete-food.js";
import { deleteCategory } from "../controllers/category/delete-category.js";
import { Authorization } from "../middleWare/Authorization.js";
import { isAdmin } from "../middleWare/isAdmin.js";
import { getCategory } from "../controllers/category/get-category.js";

export const foodsRouter = express.Router();

// Authorization, isAdmin => middlewares
foodsRouter.get("/category", getCategory);
foodsRouter.post("/category", createCategory);
foodsRouter.post("/",   createFood);
foodsRouter.post("/order", Authorization , createOrder);
foodsRouter.get("/order/:id", isAdmin , getOrder);
foodsRouter.patch("/:id", isAdmin , updateFood);
foodsRouter.patch("/category/:id", isAdmin , updateCategory);
foodsRouter.patch("/order/:id", Authorization , updateOrder);
foodsRouter.delete("/:id", isAdmin , deleteFood);
foodsRouter.delete("/category/:id", isAdmin , deleteCategory);
