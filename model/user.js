import SQ from 'sequelize';
import { sequelize } from '../database/database.js';
import { Container } from './container.js';
const DataTypes = SQ.DataTypes;

export const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: 'using login'
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: 'real name'
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
      comment: 'using login'
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: 'register that check real person'
    },
  },
  { timestamps: false }
);
User.hasOne(Container)