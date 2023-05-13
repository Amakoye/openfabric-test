import mongoose, { Document, Schema } from "mongoose";
import connectDB from "../config/db";

connectDB();

const productSchema: Schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  brand: String,
  category: String,
  price: {
    type: Number,
    required: true,
  },
});

productSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export interface ProductInterface extends Document {
  name: string;
  description: string;
  price: number;
}

export default mongoose.model<ProductInterface>("Product", productSchema);
