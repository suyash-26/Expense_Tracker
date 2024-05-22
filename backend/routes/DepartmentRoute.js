import express from "express";
import { createDepartment, deleteDepartment, getAllDepartments, updateDepartment } from "../controllers/departments.js";

const router = express.Router();

router.get("/",getAllDepartments);
router.post("/",createDepartment);
// router.get("/:id",getUser);
router.delete("/:id",deleteDepartment);
router.put("/:id",updateDepartment);

export default router;
