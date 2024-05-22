import mongoose from "mongoose";
import categories from "../models/categories.js";
import empolyees from "../models/empolyees.js";


export const getAllCategories = async (req,res,next)=>{
    try{
           const allCategories = await categories.find({});
           res.send(allCategories);
    }catch(err){
        res.send(err);
    }
}

export const createCategory = async (req,res,next) =>{
    try{
        const newCategory = new categories(req.body);
        const savedCategory = await newCategory.save();
        res.send(savedCategory);
    }catch(err){
        res.send(err);
    }
}

export const deleteCategory = async (req,res,next)=>{
    try{
        const deletedCategory = await categories.deleteOne({name:req.params.name})
        res.send(deletedCategory);
    }catch(err){
        res.send(err);
    }
}