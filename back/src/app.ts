import express, { Application } from "express";
// imp routes
import indexRoutes from "./routes/index.routes";
const app: Application = express();

// settings
app.set("port", 3000);

//routes
app.use("api/v1", indexRoutes);

export default app;
