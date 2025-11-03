export default (sequelize, DataTypes) => {
  const Exercise = sequelize.define("exercise", {
    exerciseID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    equipment: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    muscle_group: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  return Exercise;
};