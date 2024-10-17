import express from "express"
import { dbConnection } from "./config/dbConnection.js";
import userRoutes from "./routes/userRouter.js"

let app=express()

dbConnection()

//middlewares
app.use(express.json())

app.use("/api/user",userRoutes)

export default app;