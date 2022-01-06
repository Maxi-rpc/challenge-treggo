import { Router } from "express";
import testRoute from "./test.routes";

const router: Router = Router();

router.use("/test", testRoute);

export default router;
