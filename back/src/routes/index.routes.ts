import { Router } from "express";
import testRoute from "./test.routes";
import userRoute from "./user.routes";
import favRoute from "./favorite.routes";
import charRoute from "./character.routes";
import planetRoute from "./planet.routes";
import filmRoute from "./film.routes";

const router: Router = Router();

router.use("/test", testRoute);
router.use("/login", userRoute);
router.use("/favorite", favRoute);
router.use("/character", charRoute);
router.use("/planet", planetRoute);
router.use("/film", filmRoute);

export default router;
