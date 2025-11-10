import { Router } from "express";

// Import only what you currently need
import AuthRoutes from "./auth.routes.js";
import ResultRoutes from "./result.routes.js";
const router = Router();

// Mount your routes
router.use("/", AuthRoutes);
router.use("/results", ResultRoutes);
export default router;