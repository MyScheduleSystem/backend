import SQ from 'sequelize';
import { sequelize } from '../database/database.js';
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
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { timestamps: false }
);