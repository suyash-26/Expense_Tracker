import mongoose from "mongoose";
import empolyees from "../models/empolyees.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/createError.js";

export const login = async (req,res,next) =>{
    // const {user,password} = req.body;
    try{
        const user = await empolyees.findOne({email:req.body.email});
        if(!user){
            return next(createError(404,"User does not exist"));
        }
        const isPasswordCorrect = await bcrypt.compare(
            req.body.password,
            user.password
          );
        if(!isPasswordCorrect){
            return next(createError(400,"Wrong Password"));
        }
        res.status(200).send(user);
    }catch(err){
        next(err);
    }
}