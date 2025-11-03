import { Router } from "express";

const router = Router();


import ExercisePlan from "./exerciseplan.routes.js";

router.use("/exerciseplans", ExercisePlan);

export default router;
