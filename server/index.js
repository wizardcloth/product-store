import express, { json, urlencoded } from "express";
import dotenv from "dotenv";
import { database } from "./config/db.js";
import router from "./router/products.route.js";
import path from "path";
const app = express();

app.use(express.json());
// app.use(urlencoded({extended:true}));

dotenv.config();

app.use("/api/products",router);
const __dirname = path.resolve();
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"/client/dist")));
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,"client","dist","index.html"));
    })
}
// console.log(process.env.url);


let port = process.env.PORT || 8080;

app.listen(port, () => {
    database();
    console.log("server is listening");
})

