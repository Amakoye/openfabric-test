import mongoose, { Document, Schema } from "mongoose";
import connectDB from "../config/db";

connectDB();

const productSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  price: {
    type: Number,
    required: true,
  },
});

export interface ProductInterface extends Document {
  name: string;
  description: string;
  price: number;
}

export default mongoose.model<ProductInterface>("Product", productSchema);
