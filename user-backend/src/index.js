import express from "express";
import { userRouter } from "./routes/users-router.js";
import cors from "cors";
import mongoose from "mongoose";


const app = express();
const port = 3000;

const mongoString = 

app.use(cors());

app.use(express.json());

app.use("/users", userRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
