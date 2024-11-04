import mongoose, { mongo }  from "mongoose";
import { config } from "@/constants/config";

const connect = async ()=>{
    try {
         await mongoose.connect(config.MONGO_URI!);
        console.log("database connected successfully...");
        
    } catch (error) {
        console.log("databases connection failed...",error);
        process.exit(1);
    }
}

mongoose.connection.on("connected",()=>{
    console.log("Database connected successfully...");
})

mongoose.connection.on("disconnected",()=>{
    console.log("Databases disconnected...");
})

mongoose.connection.on("error",()=>{
    console.log("Database connection error");
})



export {
    connect
}