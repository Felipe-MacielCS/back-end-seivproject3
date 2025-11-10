export default (sequelize, DataTypes) => {
  const ExercisePool = sequelize.define("exercisepool", {
    exerciseID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    planID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  }, {
    timestamps: false,
  });

  return ExercisePool;
};