import mongoose, { Schema } from "mongoose";
import { Department } from "./Department.modes";

const EmployeeSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Department
    },
    phone: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

export const Employee = mongoose.model("Employee", EmployeeSchema);