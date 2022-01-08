import express, { Application } from "express";
// imp routes
import indexRoutes from "./routes/index.routes";
const app: Application = express();

// settings
app.set("port", 4000);

// middlewares
app.use(express.json());

//routes
app.use("/api/v1", indexRoutes);

export default app;
