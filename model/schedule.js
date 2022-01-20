import { sequelize } from '../database/database.js';
import { User } from './user.js';
import SQ from 'sequelize';
const DataTypes = SQ.DataTypes;

export const Schedule = sequelize.define(
  'schedule', 
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    memo: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }, 
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }
);
Schedule.belongsTo(User);