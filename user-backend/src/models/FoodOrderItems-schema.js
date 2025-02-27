import mongoose from "mongoose";

const { Schema } = mongoose.Schema;

export const orderItemsSchema = new Schema({

food : { type : SchemaType.ObjectId, required : true, ref : 'Foods'},
quantity : { type : Number, required : true },

});