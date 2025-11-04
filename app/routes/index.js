import { Router } from "express";

const router = Router();


import Exercise from "./exercise.routes.js";

router.use("/exercises", Exercise);

export default router;
