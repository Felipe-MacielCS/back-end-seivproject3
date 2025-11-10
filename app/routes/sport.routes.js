import sports from "../controllers/sport.controller.js";
import authenticate from "../authorization/authorization.js";
import { Router } from "express";

const router = Router();

router.post("/", [authenticate], sports.create);
router.get("/", [authenticate], sports.findAll);
router.get("/:id", [authenticate], sports.findOne);
router.put("/:id", [authenticate], sports.update);
router.delete("/:id", [authenticate], sports.delete);
export default router;