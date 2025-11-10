export default (sequelize, DataTypes) => {
  const Result = sequelize.define("result", {
    resultID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
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
