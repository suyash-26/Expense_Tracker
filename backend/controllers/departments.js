import mongoose from "mongoose";
import departments from "../models/departments.js";

export const getAllDepartments = async(req,res,next)=>{
    try{
        const allDepartments = await departments.find({});
        res.send(allDepartments);
    }catch(err){
        res.send(err);
    }
}

export const createDepartment = async (req,res,next)=>{
    try{
        const newDepartment = new departments(req.body);
        const savedDepartment = await newDepartment.save();
        res.send(savedDepartment);
    }catch(err){
        res.send(err);
    }
}

export const deleteDepartment = async (req,res,next)=>{
    try{
        const deletedDepartment = await departments.deleteOne({_id:req.params.id});
        res.send(deletedDepartment);
    }catch(err){
        res.send(err);
    }
}

export const updateDepartment = async (req,res,next)=>{
    try{
        const updatedDepartment = await departments.findByIdAndUpdate(req.params.id,{
            $set: req.body
        },{new:true})
        res.send(updatedDepartment)
        
    }catch(err){
        res.send(err);
    }
}