import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
  console.log("test route ok");
});

export default router;
