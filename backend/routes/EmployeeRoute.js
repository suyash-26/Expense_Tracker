import express from "express";
import { createUser, deleteUser, findExpensesByManager, getAllUsers, getUser, updateUser } from "../controllers/user.js";
const router = express.Router();

router.get("/",getAllUsers);
router.post("/",createUser);
router.get("/:id",getUser);
router.get("/teamApprovals/:id",findExpensesByManager)
router.delete("/:id",deleteUser);
router.put("/:id",updateUser);

export default router;
