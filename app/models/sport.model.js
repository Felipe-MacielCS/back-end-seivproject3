export default (sequelize, DataTypes) => {
  const Sport = sequelize.define("sport", {
    sportID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    athleteID: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
    });

  return Sport;
};