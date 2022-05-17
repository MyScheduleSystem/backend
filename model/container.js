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
    boxHeight: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 500,
    },
    boxWidth: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 700,
    },
    boxPadding: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
    },
    boxMargin: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
    },
  },
  { timestamps: false }
);