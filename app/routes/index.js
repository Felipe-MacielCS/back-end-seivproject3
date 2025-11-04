import { Router } from "express";

const router = Router();


import ExercisePool from "./exercisepool.routes.js";

router.use("/exercisepools", ExercisePool);

export default router;
