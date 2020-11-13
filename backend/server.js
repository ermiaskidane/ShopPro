import express from "express"
import dotenv from "dotenv"
import colors from "colors"

import { notFound, errorHandler } from "./middleware/errorMiddleware.js"
import connectDB from "./config/db.js"
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"

dotenv.config()

connectDB()

const app = express()

// to access json format in the req.body
app.use(express.json())

app.get("/", (req, res) => {
    res.send("API is running...")
})

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)

// // Custom Error Handler for Routes does not exist
app.use(notFound);

// app.use((req, res, next) => {
//     const error = new Error(`Not Found - ${req.originalUrl}`)
//     res.status(404)
//     next(error)
// })

// // Custom Error handler
app.use(errorHandler);

// app.use((err, req, res, next) => {
//     const statusCode = res.statusCode === 200 ? 500 : res.statusCode
//     res.status(statusCode)
//     res.json({
//         message: err.message,
//         stack: process.env.NODE_ENV === "production" ? null : err.stack,
//     })
// })

const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode port ${PORT}`))
