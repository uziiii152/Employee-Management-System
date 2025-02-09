import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
import dotenv from "dotenv";
dotenv.config({
    path: "./env"
});


const connectDB = async () => {
    try {
        const mongoURI = `${process.env.MONGODB_URI}/${DB_NAME}`;
        const connectionInstance = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            w: 'majority',  // Use the standard majority write concern
            wtimeout: 5000, // Optional: Set a timeout for the write concern
        });
        console.log(`MongoDB connected! DB host: ${connectionInstance.connection.host}`);
    } catch (error) {
       console.log("Error connecting to database",error);
       process.exit(1);
    }
}


export default connectDB;