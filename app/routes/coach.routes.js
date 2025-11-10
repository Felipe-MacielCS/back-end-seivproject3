import coaches from "../controllers/coach.controller.js";
import authenticate from "../authorization/authorization.js";
import { Router } from "express";

const router = Router();

router.post("/", [authenticate], coaches.create);
router.get("/", [authenticate], coaches.findAll);
router.get("/:id", [authenticate], coaches.findOne);
router.put("/:id", [authenticate], coaches.update);
router.delete("/:id", [authenticate], coaches.delete);

export default router;