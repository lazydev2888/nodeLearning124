import express from "express";
import { User } from "../models/User.js";
import { createUser, getAllUsers, getUserById, specialFunc } from "../controllers/user.js";

const router = express.Router();


router.get("/all", getAllUsers); 


router.post("/new", createUser);

router.get("/userid/special", specialFunc);


router.get("/userid/:id", getUserById);

export default router;
