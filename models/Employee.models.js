import mongoose, { Schema } from "mongoose";

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
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
  },
  { timestamps: true }
);

export const Employee = mongoose.model("Employee", EmployeeSchema);