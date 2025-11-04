import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";
import sequelize from "../config/sequelizeInstance.js";


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


import Goal from "./goal.model.js";
db.goal = Goal(sequelize, Sequelize);


export default db;
