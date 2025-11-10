export default (sequelize, DataTypes) => {
  const Result = sequelize.define("result", {
    resultID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    goalID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recordDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    value: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING
    }
  });

  return Result;
};