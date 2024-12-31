import mongoose, { Schema } from "mongoose";


const DepartmentSchema = new Schema(
  { 
    departmentName: {
    type: String,
    required: true,
  }
}
);

export const Department = mongoose.model("Department", DepartmentSchema);