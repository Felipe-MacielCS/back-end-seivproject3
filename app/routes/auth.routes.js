import auth from "../controllers/auth.controller.js";
import authenticate from "../authorization/authorization.js";
import { Router } from "express";

const router = Router();

// Login
router.post("/login", auth.login);

// Logout
router.post("/logout", auth.logout);

export default router;
