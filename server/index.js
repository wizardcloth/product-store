import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import { database } from "./config/db.js";
import router from "./router/products.route.js";
const app = express();

app.use(express.json());
// app.use(urlencoded({extended:true}));

dotenv.config();
// console.log(process.env.url);

app.use("/api/products",router);

let port = process.env.PORT || 8080;

app.listen(port, () => {
    database();
    console.log("server is listening");
})

