import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config.js";

// Import model definitions
import User from "./user.model.js";
import Athlete from "./athlete.model.js";
import Coach from "./coach.model.js";
import Sport from "./sport.model.js";
import Goal from "./goal.model.js";
import Result from "./result.model.js";
import Exercise from "./exercise.model.js";
import ExercisePool from "./exercisepool.model.js";
import ExercisePlan from "./exerciseplan.model.js";

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Initialize models
db.user = User(sequelize, Sequelize);
db.athlete = Athlete(sequelize, Sequelize);
db.coach = Coach(sequelize, Sequelize);
db.sport = Sport(sequelize, Sequelize);
db.goal = Goal(sequelize, Sequelize);
db.result = Result(sequelize, Sequelize);
db.exercise = Exercise(sequelize, Sequelize);
db.exercisepool = ExercisePool(sequelize, Sequelize);
db.exerciseplan = ExercisePlan(sequelize, Sequelize);


// athlete foreign key
db.user.hasMany(db.athlete, { foreignKey: "userID", as: "athletes" });
db.athlete.belongsTo(db.user, { foreignKey: "userID", as: "user" });

// caoch foreign key
db.user.hasOne(db.coach, { foreignKey: "userID", as: "coach" });
db.coach.belongsTo(db.user, { foreignKey: "userID", as: "user" });

//  sport foreign key
db.athlete.hasMany(db.sport, { foreignKey: "athleteID", as: "sports" });
db.sport.belongsTo(db.athlete, { foreignKey: "athleteID", as: "athlete" });

// goal foreign key
db.athlete.hasMany(db.goal, { foreignKey: "athleteID", as: "goals" });
db.goal.belongsTo(db.athlete, { foreignKey: "athleteID", as: "athlete" });

db.exercise.hasMany(db.goal, { foreignKey: "exerciseID", as: "goals" });
db.goal.belongsTo(db.exercise, { foreignKey: "exerciseID", as: "exercise" });

// result foreign key
db.goal.hasMany(db.result, { foreignKey: "goalID", as: "results" });
db.result.belongsTo(db.goal, { foreignKey: "goalID", as: "goal" });

// exerciseplan foreign key
db.coach.hasMany(db.exerciseplan, { foreignKey: "coachID", as: "exerciseplans" });
db.exerciseplan.belongsTo(db.coach, { foreignKey: "coachID", as: "coach" });

// exercisepool foreign key - many-to-many between exercise and exerciseplan
db.exercise.belongsToMany(db.exerciseplan, {
  through: db.exercisepool,
  foreignKey: "exerciseID",
  otherKey: "planID",
  as: "exerciseplans",
});
db.exerciseplan.belongsToMany(db.exercise, {
  through: db.exercisepool,
  foreignKey: "planID",
  otherKey: "exerciseID",
  as: "exercises",
});

export default db;