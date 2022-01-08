import { Router } from "express";

const router: Router = Router();

// imp controller
import { indexControllers } from "../controllers/index.controllers";

router.post("/", indexControllers.addFav);
router.delete("/", indexControllers.delFav);

export default router;
