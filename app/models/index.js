import dbConfig from "../config/db.config.js";
import { Sequelize } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

// Import only the User model
import User from "./user.model.js";
import Goal from "./goal.model.js";
import Result from "./result.model.js";

// Define the db object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Assign models
db.user = User;
db.goal = Goal;
db.result = Result;

// Initialize models
db.result = Result(sequelize, Sequelize.DataTypes);

// Goal → Result (one-to-many)
db.goal.hasMany(db.result, { foreignKey: "goalID" });
db.result.belongsTo(db.goal, { foreignKey: "goalID" });

// Export db
export default db;