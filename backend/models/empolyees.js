import mongoose from "mongoose";
const { schema } = mongoose;

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
  manager: {
    type: String,
    required: false,
  },
  department: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique:true
  },
},{timestamps:true});
export default mongoose.model("Employee", EmployeeSchema);
