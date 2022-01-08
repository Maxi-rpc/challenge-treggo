import { Router } from "express";
import testRoute from "./test.routes";
import userRoute from "./user.routes";
import favRoute from "./favorite.routes";

const router: Router = Router();

router.use("/test", testRoute);
router.use("/login", userRoute);
router.use("/favorite", favRoute);
router.use("/character");
router.use("/planet");
router.use("/film");

export default router;
