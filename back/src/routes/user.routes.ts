import { Router } from "express";

const router: Router = Router();

// controller
import { user } from "../controllers/index.controllers";

router.post("/", user.Login);

export default router;
