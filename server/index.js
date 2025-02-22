import express from "express";
import dotenv from "dotenv";
import { database } from "./config/db.js";
import router from "./router/products.route.js";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware setup
app.use(express.json());
app.use(cors({
    origin: 'https://product-store-j9hi.vercel.app',
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PUT'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));


app.use("/api/products", router);

const connectToDatabase = async () => {
    try {
        await database();
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Database connection failed", error);
        process.exit(1); // Exit if database connection fails
    }
};

app.get("/", (req, res) => res.send("Serverless Express API"));

// Export the handler as a Vercel function
export default async function handler(req, res) {
    await connectToDatabase();
    app(req, res);
}

