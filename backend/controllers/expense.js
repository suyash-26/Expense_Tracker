import mongoose from "mongoose";
import expenses from "../models/expenses.js";

export const getAllExpenses = async (req,res,next) =>{
    try{
        const allExpenses  = await  expenses.find({});
        res.status(200).send(allExpenses);
    }catch(err){
        res.send(err);
    }
}

export const createExpense = async (req,res,next)=>{
    try{
        const newExpense = new expenses(req.body);
        const savedExpense = await newExpense.save();
        res.status(200).send(savedExpense);
    }catch(err){
        res.send(err);
    }
}

export const getExpense = async (req,res,next) =>{
    try{
        const expense = await expenses.findById(req.params.id);
        res.status(200).send(expense);
    }catch(err){
        res.send(err);
    }
}


// remember to pass comments from frontend while updating expenses in body

export const updateExpense = async (req,res,next) =>{
    try{
        console.log(req.body);
        const updatedExpense = await expenses.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true})
        res.send(updatedExpense);
    }catch(err){
        res.send(err);
    }
}