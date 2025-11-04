import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";
import sequelize from "../config/sequelizeInstance.js";


const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


import Athlete from "./athlete.model.js";
db.athete = Athlete(sequelize, Sequelize);


export default db;
