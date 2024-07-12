//package imports
import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { app, server } from "./socket/socket.js";
import path from "path";

//routes imports
import authRoutes from "./routes/api.auth.routes.js";
import messageRoutes from "./routes/api.message.routes.js";
import userRoutes from "./routes/api.user.routes.js";

//db imports
import connectToMongooseDb from "./db/connectToMongoDb.js";

// port on which the server is going to run
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

dotenv.config();

app.use(express.json()); // to parse incoming json payload from req.body

//middleware for cookies
app.use(cookieParser());

//--------authentication  related routes such as login ,logout, signup
app.use("/api/auth", authRoutes);
//-------- messages related routes
app.use("/api/messages", messageRoutes);
//--------user route
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

server.listen(PORT, () => {
  connectToMongooseDb();
  console.log(`Server is Running over port no :-  ${PORT}`);
});
