import express from "express";
const app = express();

const PORT = process.env.PORT || 8000;

import cors from "cors";
import morgan from "morgan";

//connect mongodb
import connectMongo from "./src/config/dbConfig.js";
connectMongo();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// uncaught router request
app.use("*", (req, res, next) => {
  const error = {
    errorCode: 404,
    message: "Requested resources not found",
  };
  next(error);
});

//global error handler
app.use((error, req, res, next) => {
  try {
    const errorCode = error.errorCode || 500;

    res.status(errorCode).json({
      status: "error",
      message: error.message,
    });
  } catch (error) {
    res.status(5000).json({
      status: "error",
      message: error.message,
    });
  }
});
