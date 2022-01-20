import { sequelize } from '../database/database.js';
import SQ from 'sequelize';
import { User } from './user.js';
const DataTypes = SQ.DataTypes;

export const Follow = sequelize.define(
  'follow',
  {
    followeredId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }
)
Follow.belongsTo(User);
