import express from "express";
import { createUser, deleteUser, getAllUsers, getUser, updateUser } from "../controllers/user.js";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/login",login);
// router.post("/",createUser);
// router.get("/:id",getUser);
// router.delete("/:id",deleteUser);
// router.put("/:id",updateUser);

export default router;
