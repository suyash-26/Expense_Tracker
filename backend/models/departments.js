import mongoose from "mongoose";
const { schema } = mongoose;

const DepartmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true
  }
},{timestamps:true});
export default mongoose.model("Departement", DepartmentSchema);
