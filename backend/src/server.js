import express from "express";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

const app = express();

app.get("/health", (req, res) => {
    res.status(200).json({msg:"Success from api"})
})

const startServer = async () => {
    try {
        await connectDB();
        app.listen(ENV.PORT, () => {
            console.log("Server is running")
        });
    } catch (error) {
        console.log("Error starting the server", error)
    }
};

startServer();