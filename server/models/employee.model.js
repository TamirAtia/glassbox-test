const { DataTypes } = require("sequelize");
const DBO = require("../DB/DBO");
const db = DBO.sequelize;

const EmployeeModel = db.define(
  "employee",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    department: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = EmployeeModel;
