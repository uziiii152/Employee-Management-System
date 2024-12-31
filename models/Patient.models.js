import { Schema } from "mongoose";

const patientSchema = new Schema({
    fullName:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    assignedDoctorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: Employee
    },
    appointmentDate:{
        type: Date,
        required: true
    },
})

export const Patient = mongoose.model("Patient", patientSchema);