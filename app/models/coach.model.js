export default (sequelize, DataTypes) => {
  const Coach = sequelize.define("coach", {
    coachID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Coach;
};
