import { Router } from "express";
import User from "./user.routes.js";
import Athlete from "./athlete.routes.js";
import Coach from "./coach.routes.js";
import Sport from "./sport.routes.js";
import Goal from "./goal.routes.js";
import Result from "./result.routes.js";
import Exercise from "./exercise.routes.js";
import ExercisePool from "./exercisepool.routes.js";
import ExercisePlan from "./exerciseplan.routes.js";

const router = Router();

router.use("/users", User);
router.use("/athletes", Athlete);
router.use("/coaches", Coach);
router.use("/sports", Sport);
router.use("/goals", Goal);
router.use("/results", Result);
router.use("/exercises", Exercise);
router.use("/exercisepools", ExercisePool);
router.use("/exerciseplans", ExercisePlan);

export default router;
