import { Router } from "express";

const router = Router();


import CoachRoutes from "./coach.routes.js";

router.use("/coaches", CoachRoutes);

export default router;
