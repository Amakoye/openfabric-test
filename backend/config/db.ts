import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
  console.log(process.env.MONGODB_URI);
  try {
    const connectionUri = `${process.env.MONGODB_URI}`;
    await mongoose.connect(connectionUri);

    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "Connection error:"));
    db.once("open", () => {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
