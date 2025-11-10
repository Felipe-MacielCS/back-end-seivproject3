import results from "../controllers/result.controller.js";
import authenticate from "../authorization/authorization.js";
import { Router } from "express";

var resultRouter = Router();

resultRouter.post("/", [authenticate], results.create);
resultRouter.get("/", [authenticate], results.findAll);
resultRouter.get("/:id", [authenticate], results.findOne);
resultRouter.put("/:id", [authenticate], results.update);
resultRouter.delete("/:id", [authenticate], results.delete);

export default resultRouter;
