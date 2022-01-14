import { Router } from "express";

const router: Router = Router();

// imp controller
import { indexControllers } from "../controllers/index.controllers";

router.get("/", indexControllers.getPlan);

export default router;
