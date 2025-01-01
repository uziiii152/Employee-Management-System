import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(cors({
    credentials: true,
    origin: process.env.CORS_ORIGIN
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(cookieParser())

import router from "./routes/healthcheck.routes.js"
import { errorHandler } from "./middlewares/error.middlewares.js"

app.use("/api/v1/healthcheck", router)
app.use(errorHandler)

export { app }
