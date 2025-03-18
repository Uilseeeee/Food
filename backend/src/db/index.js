import mongoose from "mongoose";

export const connectToDatabase = async () => {
mongoose
  .connect("mongodb+srv://uilseeu437:Mfv7WzyIjqhTieRp@cluster0.oysuc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
}