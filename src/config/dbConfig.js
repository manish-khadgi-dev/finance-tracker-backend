import mongoose from "mongoose";

// Schema is also a validator

export const connectMongoDB = async () => {
  try {
    const mongoUrl = "mongodb://localhost:27017/ft-new";
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(mongoUrl);

    conn && console.log("Mongo Connected");
  } catch (error) {
    console.log(error.message, "from ConnectMongoDB function");
  }
};

export default mongoConnect;
