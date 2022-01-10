import { Router } from "express";

const router: Router = Router();

// imp controller
import { indexControllers } from "../controllers/index.controllers";

router.get("/:character", indexControllers.getFilm);

export default router;
