import dbConfig from "../config/db.config.js";
import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

// Import the model function
import ResultModel from "./result.model.js";

// Define the db object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.result = ResultModel(sequelize, DataTypes);

// Export db
export default db;