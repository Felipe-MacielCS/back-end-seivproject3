import express from "express";
import coachAthlete from "../controllers/coachathlete.controller.js";

const router = express.Router();

router.post("/", coachAthlete.create);
router.get("/", coachAthlete.findAll);
router.delete("/:coachID/:athleteID", coachAthlete.delete);

export default (app) => {
  app.use("/tracker-t7/coachathletes", router);
};
