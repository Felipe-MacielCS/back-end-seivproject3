import { DataTypes } from "sequelize";
import sequelize from "../config/sequelizeInstance.js";

const ExercisePlan = sequelize.define(
  "exerciseplan",
  {
    planID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    repetitions: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    coachID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "exerciseplans",
    timestamps: true,
  }
);

export default ExercisePlan;