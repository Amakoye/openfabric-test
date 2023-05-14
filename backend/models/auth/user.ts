import mongoose, { Document, Schema } from "mongoose";

const userSchema: Schema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.set("toJSON", {
  transform: (doc, ret, options) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

export interface User extends Document {
  username: string;
  password: string;
}

export default mongoose.model<User>("User", userSchema);
