import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

// creating a router variable from express.Router()
// now using router we can access all the HTTP methods
//such as get , post , put , delete
// the router router variable will be exported and can be
// used anywhere
const router = express.Router();

//to make the code clean and precise we will use controller structure
//otherwise login,logout,signup all will have atleast 25 lines of code
// which will make the code to conjusted so will import it from contoller folder
router.post("/login", login);

router.post("/logout", logout);

router.post("/signup", signup);

export default router;
