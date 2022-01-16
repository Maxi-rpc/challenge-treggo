import { Router } from "express";

const router: Router = Router();

// controller
import { character } from "../controllers/index.controllers";

router.get("/", character.Get);

export default router;
