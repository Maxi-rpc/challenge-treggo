import { Router } from "express";

const router: Router = Router();

// controller
import { indexControllers } from "../controllers/index.controllers";

router.post("/", indexControllers.login);

export default router;
