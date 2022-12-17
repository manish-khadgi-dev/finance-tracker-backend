import express from "express";
import { createUser } from "../models/UserModel";

const router = express.Router();

router.all("/", (req, res, next) => {
  console.log("Got hit all router");
  next();
});

//creating new user
router.post("/", async (req, res, next) => {
  try {
    console.log(req.body);
    const result = await createUser(req.body);
    result?._id
      ? res.json({
          status: "success",
          message: "New user Creted  ",
        })
      : res.json({
          status: "success",
          message: "To do insert user  ",
        });
  } catch (error) {
    let message = error.message;
    if (error.message.includes("E11000")) {
      message = "Email Already in Use ";
    }
    res.json({
      status: "error",
      message: message,
    });
    next(error);
  }
});
