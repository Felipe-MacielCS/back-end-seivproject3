import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";
import sequelize from "../config/sequelizeInstance.js";


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


import Coach from "./coach.model.js";
db.coach = Coach(sequelize, Sequelize);


export default db;
