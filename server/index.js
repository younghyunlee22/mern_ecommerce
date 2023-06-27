import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
import categoryRoutes from "./routes/category.js";
import productRoutes from "./routes/product.js";
import cors from "cors";

dotenv.config(); /*loads the variables from a .env file 
                    and sets them as environment variables in the current running process */

const app = express(); //excute express

// db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB ERROR => ", err));

// middlewares
app.use(morgan("dev"));
app.use(express.json()); // server passes the data via this middleware

// router middleware
app.use(cors());
app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);

const port = process.env.PORT || 8000;
// "process.env.PORT" in Node.js: port number on which a server should listen for incoming requests

app.listen(8000, () => {
  console.log(`Node server is running on port ${port}`);
});
