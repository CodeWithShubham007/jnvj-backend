import dotenv from "dotenv";
import DataBaseConnection from "./db/index.js";
import express from 'express'
console.log(process.env)
dotenv.config()

const app = express();

// Define PORT
const PORT = process.env.PORT || 3300

DataBaseConnection();

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);    
})
