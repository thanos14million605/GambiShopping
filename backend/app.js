import dotenv from "dotenv";
dotenv.config({
  path: ".",
});

import express from "express";
import morgan from "morgan";

import productRouter from "./../backend/routes/productRoutes.js";
import globalErrorHandler from "./utils/globalErrorHandler.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

// Routers
app.use("/api/v1/products", productRouter);

app.use(globalErrorHandler);

export default app;
