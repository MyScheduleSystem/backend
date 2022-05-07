import SQ from 'sequelize';
import { sequelize } from '../database/database.js';
import { Calendar } from './calendar.js';
const DataTypes = SQ.DataTypes;

export const Container = sequelize.define(
  'container', 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    year: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    month: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  { timestamps: false }
);
Container.hasMany(Calendar, {
  foreignKey: "containerId",
  sourceKey: "id"
});