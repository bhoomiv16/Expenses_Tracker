import express from "express"
import userRouter from "./routes/userRouter.js";
import { dbConnection } from "./config/dbConnection.js";

let app=express()
dbConnection()
app.use(express.json())

app.use("/api/user",userRouter)

export default app;