import { Router } from "express";

const router = Router();


import Coach from "./coach.routes.js";

router.use("/coaches", Coach);

export default router;
