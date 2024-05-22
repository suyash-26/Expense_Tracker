import express from "express";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js";
import DepartmentRoute from "./routes/DepartmentRoute.js";
import EmployeeRoute from "./routes/EmployeeRoute.js";
import ExpenseRoute from "./routes/ExpenseRoute.js";
import CategoryRoute from "./routes/categoryRoute.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
const connect = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://suyashjaiswal2001:991Rc0IH2sXsp0Et@cluster0.qvlmcbx.mongodb.net/ExpenseDb");
        console.log("Connected to DB");
    }catch(err){
        console.log(err);
    }
    mongoose.connection.on("disconnected",(err)=>{
        console.log(err);
    })
}

app.use("/api/v1/employees",EmployeeRoute);
app.use("/api/v1/categories",CategoryRoute);
app.use("/api/v1/expenses",ExpenseRoute);
app.use("/api/v1/departments",DepartmentRoute);
app.use("/api/v1/auth",authRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

app.listen(8000,()=>{
    connect();
    console.log("server started");
})