import mongoose from "mongoose";
import "dotenv/config";

const MONGODB_URI = process.env.MONGODB_URI!;

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGODB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error:any) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
}
