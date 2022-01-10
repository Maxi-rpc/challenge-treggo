import express, { Application } from "express";
import cors from "cors";
// imp routes
import indexRoutes from "./routes/index.routes";
const app: Application = express();

// settings
app.set("port", 4000);

// middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1", indexRoutes);

export default app;
