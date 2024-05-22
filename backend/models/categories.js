import mongoose from "mongoose";
const { schema } = mongoose;

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique:true
  },
  limit:{
    type:Number,
    required: true,
  }
},{timestamps:true});
export default mongoose.model("Categories", CategorySchema);
