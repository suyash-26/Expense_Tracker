import express from "express";
import { createCategory, deleteCategory, getAllCategories } from "../controllers/categories.js";

const router = express.Router();

router.get("/",getAllCategories);
router.post("/",createCategory);
// router.get("/:id",getUser);
router.delete("/:name",deleteCategory);
// router.put("/:id",updateUser);

export default router;
