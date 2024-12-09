const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./User");

const Task = sequelize.define("Task", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING },
  status: { type: DataTypes.ENUM("To Do", "In Progress", "Completed"), defaultValue: "To Do" },
});

Task.belongsTo(User, { foreignKey: "user_id" });
module.exports = Task;
