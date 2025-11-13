import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";
import sequelize from "../config/sequelizeInstance.js";

import User from "./user.model.js";
import Athlete from "./athlete.model.js";
import Session from "./session.model.js";
import Coach from "./coach.model.js";
import Goal from "./goal.model.js";
import ExercisePlan from "./exerciseplan.model.js";
import ExercisePool from "./exercisepool.model.js";

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = User;
db.session = Session;
db.athlete = Athlete;
db.coach = Coach;
db.goal = Goal;
db.exerciseplan = ExercisePlan;
db.exercisepool = ExercisePool;

db.user.hasOne(db.athlete, { foreignKey: "userID", onDelete: "CASCADE" });
db.user.hasOne(db.coach, { foreignKey: "userID", onDelete: "CASCADE" });

db.athlete.belongsTo(db.user, { foreignKey: "userID" });
db.coach.belongsTo(db.user, { foreignKey: "userID" });

export default db;
