import { Router } from "express";

const router: Router = Router();

// imp controller
import { favorite } from "../controllers/index.controllers";

router.post("/", favorite.Add);
router.delete("/", favorite.Del);

export default router;
