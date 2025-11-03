import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";
import sequelize from "../config/sequelizeInstance.js";


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


import ExercisePlan from "./exerciseplan.model.js";
db.exerciseplan = ExercisePlan(sequelize, Sequelize);


export default db;
