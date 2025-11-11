import { Router } from "express";

// Import only what you currently need
import AuthRoutes from "./auth.routes.js";
import UserRoutes from "./user.routes.js";
import AthleteRoutes from "./athlete.routes.js";
import Coach from "./coach.routes.js";

const router = Router();

// Mount your routes
router.use("/", AuthRoutes);
router.use("/users", UserRoutes);
router.use("/athletes", AthleteRoutes);
router.use("/coaches", Coach);

export default router;
