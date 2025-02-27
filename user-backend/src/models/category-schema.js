import mongoose from "mongoose";

const Schema = mongoose.Schema;

const categorySchema = new Schema({
categoryName : {type : String, required : true},
createdAt : {type : Date},
updatedAt : {type : Date},
});

export const Category = mongoose.model("Category", categorySchema);