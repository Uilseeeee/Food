import mongoose, { SchemaType } from "mongoose";

const { Schema } = mongoose;

const foodsSchema = new Schema({
  id: { ObjectId, required: true },
  name: { type: String, required: true },
  price : { type: Number, required: true },
  image : { type: String } ,
  ingredients : { type: String },       
  category : {type: SchemaType.ObjectId, required: true, ref: 'Category'},
  createdAt: { type: Date },
  updatedAt: { type: Date },
});

export const Foods = mongoose.model("Foods", CategorySchema);
