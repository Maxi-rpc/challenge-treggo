import { Router } from "express";

const router: Router = Router();

// controller
import { indexControllers } from "../controllers/index.controllers";

router.get("/", indexControllers.getChar);

export default router;
