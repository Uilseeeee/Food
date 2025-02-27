import mongoose, { Schema } from "mongoose";
const { model} = mongoose;

const categorySchema = new Schema(
    {
    categoryName: { type: String, required: true },
},
{
    timestamps: true,
}
);

export const categoryModel = model("Category", categorySchema);