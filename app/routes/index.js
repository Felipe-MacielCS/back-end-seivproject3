import { Router } from "express";

const router = Router();

import AuthRoutes from "./auth.routes.js";
import UserRoutes from "./user.routes.js";
import AthleteRoutes from "./athlete.routes.js";
import Coach from "./coach.routes.js";
import Goal from "./goal.routes.js";
import Exercise from "./exercise.routes.js";

router.use("/", AuthRoutes);
router.use("/users", UserRoutes);
router.use("/athletes", AthleteRoutes);
router.use("/coaches", Coach);
router.use("/goals", Goal);
router.use("/exercises", Exercise);

export default router;
