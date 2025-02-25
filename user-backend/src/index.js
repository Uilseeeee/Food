import express from "express";
import { userRouter } from "./routes/users-router.js";
import cors from "cors";
import mongoose from "mongoose";


const app = express();
dotenv.config();
const port = 3000;

mongoose.connect(process.env.).then(() => {
  
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.log("Error: ", error);
}
); 

app.use(cors());

app.use(express.json());

app.use("/users", userRouter);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
