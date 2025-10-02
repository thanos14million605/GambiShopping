import { join } from "path";
import path from "path";
import { fileURLToPath } from "url";

import dotenv from "dotenv";
dotenv.config({
  path: "./config.env",
});

import express from "express";

import app from "./app.js";
import connectToDB from "./db/db.js";

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION 🔥🔥");
  console.log("Shutting down gracefully...");
  console.log(err);

  process.exit(1);
});

const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "./../frontend/dist")));

  app.use((req, res) => {
    res.sendFile(join(__dirname, "./../frontend/dist", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION 🔥🔥");
  console.log("Shutting down gracefully...");
  console.log(err);

  server.close(() => {
    process.exit(1);
  });
});
