import mongoose, { SchemaType } from "mongoose";

const { Schema } = mongoose.Schema;

export const orderSchema = new Schema({
user : { type : SchemaType.ObjectId, required : true, ref : 'Users'},
totalPrice : { type : Number, required : true },
foodOrderItems : { type : String ,  },
status : { type : String, enum : ['pending', 'delivered', 'cancelled'], default : 'pending'},
createdAt : { type : Date },
updatedAt : { type : Date },
});