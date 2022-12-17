import express from "express";
import { createUser } from "../models/UserModel.js";

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
    console.log(result);
    result?._id
      ? res.json({
          status: "success",
          message: "New user Creted  ",
        })
      : res.json({
          status: "error",
          message: "unable insert user  ",
        });
  } catch (error) {
    if (error.message.includes("E11000")) {
      error.errorCode = 200;
      error.message =
        "This email has been used already, use different email or reset your password";
    }

    next(error);
  }
});

export default router;
