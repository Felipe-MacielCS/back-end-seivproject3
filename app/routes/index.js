import { Router } from "express";

const router = Router();


import Athlete from "./coach.routes.js";

router.use("/athletes", Athlete);

export default router;
