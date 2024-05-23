import mongoose from "mongoose";
const { schema } = mongoose;

const ExpenseSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  name:{
    type:String,
    required:true,
  },
  amount: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  empId: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: false,
  },
  comment:{
    type:String,
    required: false,
  }
},{timestamps:true});
export default mongoose.model("Expense", ExpenseSchema);
