import { Router } from "express";

const router = Router();


import Goal from "./goal.routes.js";

router.use("/goals", Goal);

export default router;
