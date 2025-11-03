import dbConfig from "../config/db.config.js";
import { Sequelize } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

// Import only the User model
import User from "./user.model.js";

// Define the db object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Assign models
db.user = User;

// Export db
export default db;