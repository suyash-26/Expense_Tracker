import mongoose from "mongoose";
import empolyees from "../models/empolyees.js"
import expenses from "../models/expenses.js";
import bcrypt from "bcryptjs";



const isUser = async (id)=>{
    try{
        const user = await empolyees.findOne({id:id});
        if(!user){
            return false;
        }
        return true;
    }catch(err){
        console.log(err);
    }
}

export const findExpensesByManager = async (req,res,next)=>{
    const managerId = req.params.id
    try {
      // Step 1: Find all employees managed by the given manager
      const managedEmployees = await empolyees.find({ manager: managerId });
      
      // Extract the empIds of the managed employees
      const managedEmployeeIds = managedEmployees.map(employee => employee.id);
      
      // Step 2: Find all expenses submitted by these employees
      const data = await expenses.find({ empId: { $in: managedEmployeeIds } });
      
      res.send(data);
    } catch (err) {
      console.error("Error finding expenses by manager:", err);
      res.send(err);
    }
  }




export const getAllUsers = async (req,res)=>{
    try{
        const data = await empolyees.find({});
        res.status(200).json(data);
    }catch(err){
        console.log(err);
    }
}

export const createUser = async (req,res,next)=>{

    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new empolyees({
          ...req.body,
          password: hash,
        });
        await newUser.save();
        res.status(200).send("User has been created:" + newUser);
      } catch (err) {
        next(err);
      }



    // console.log(req.body);
    // const newEmployee = new empolyees(req.body);
    // try{
    //     const savedEmployee = await newEmployee.save();
    //     console.log(savedEmployee);
    //     res.send(savedEmployee);
    // }catch(err){
    //     res.send(err);
    // }
}

export const getUser = async (req,res,next)=>{
    try{
        const user = await empolyees.findOne({id:req.params.id});
        res.status(200).send(user);
    }catch(err){
        res.send(err);
    }
}

export const deleteUser = async (req,res,next)=>{
    try{
        const deletedUser = await empolyees.deleteOne({id:req.params.id});
        res.status(200).send(deletedUser);
    }catch(err){
        res.send(err);
    }
}

export const updateUser = async (req,res,next)=>{
    try{
         const updatedUser = await empolyees.updateOne({id:req.params.id},{
            $set: req.body
         },{new:true});
        res.send(updatedUser);
    }catch(err){
        res.send(err);
    }
}