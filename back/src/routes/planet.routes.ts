import { Router } from "express";

const router: Router = Router();

// imp controller
import { planet } from "../controllers/index.controllers";

router.get("/", planet.Get);

export default router;
