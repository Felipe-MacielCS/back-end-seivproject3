import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";
import sequelize from "../config/sequelizeInstance.js";


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


import Exercise from "./exercise.model.js";
db.exercise = Exercise(sequelize, Sequelize);


export default db;
