import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionUri =
      "mongodb+srv://charlesamakoye:FbbZwX9NLBF4FyLP@cluster2023.inetwf2.mongodb.net/open_fabric_db?retryWrites=true&w=majority";
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
