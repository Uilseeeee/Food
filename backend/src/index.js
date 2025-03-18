import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToDatabase } from "./db/index.js";
import { userRouter } from "./routes/users-router.js";
import { foodsRouter } from "./routes/foods.router.js";
dotenv.config();

const app = express();
const port = 8000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
})

// const mongoString= process.env.MONGO_CONNECTION_STRING;
// console.log(mongoString);

connectToDatabase();

app.use("/foods", foodsRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;