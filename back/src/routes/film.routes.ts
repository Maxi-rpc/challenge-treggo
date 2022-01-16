import { Router } from "express";

const router: Router = Router();

// imp controller
import { film } from "../controllers/index.controllers";

router.get("/", film.Get);

export default router;
