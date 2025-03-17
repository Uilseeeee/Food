import express from "express";
import { userRouter } from "./routes/users-router.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { foodsRouter } from "./routes/foods.router.js";
import cors from "cors";

const app = express();
dotenv.config();
const port = 3000;
app.use(cors());

console.log(process.env.MONGO_CONNECTION_STRING);

mongoose

  .connect(process.env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

app.use(express.json());
app.use("/foods", foodsRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

