import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";
import sequelize from "../config/sequelizeInstance.js";


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


import ExercisePool from "./exercisepool.model.js";
db.exercisepool = ExercisePool(sequelize, Sequelize);


export default db;
