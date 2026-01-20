import mongoose from "mongoose";
import {DATABASE_NAME} from "../constants.js"

const DataBaseConnection = async () => {
    try {
        const databaseConnection = await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`)
        console.log(`\n MongoDB connected!! DB HOST ${databaseConnection.connection.host}`); 
    } catch (error) {
        console.error("Database Connection Error: ",error);
        process.exit(1)
    }
}

export default DataBaseConnection;