import mongoose from "mongoose";

// Schema is also a validator

const connectMongoDB = () => {
  try {
    const mongoUrl = "mongodb://localhost:27017/ft-new";
    mongoose.set("strictQuery", true);
    const conn = mongoose.connect(mongoUrl);

    conn && console.log("Mongo Connected");
  } catch (error) {
    console.log(error.message, "from ConnectMongoDB function");
  }
};

export default connectMongoDB;
