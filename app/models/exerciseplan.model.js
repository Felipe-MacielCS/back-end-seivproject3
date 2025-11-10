export default (sequelize, DataTypes) => {
  const ExercisePlan = sequelize.define("exerciseplan", {
    planID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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
  });

  return ExercisePlan;
};