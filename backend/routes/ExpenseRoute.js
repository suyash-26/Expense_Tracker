import express from "express";
import { createExpense, getAllExpenses, getAllExpensesOfEmp, getExpense, updateExpense } from "../controllers/expense.js";

const router = express.Router();

router.get("/",getAllExpenses);
router.post("/",createExpense);
router.get("/:id",getExpense);
router.get("/allexpenses/:empId",getAllExpensesOfEmp);
// router.delete("/:id",deleteUser);/
router.put("/:id",updateExpense);

export default router;
