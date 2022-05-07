import SQ from 'sequelize';
import { sequelize } from '../database/database.js';
const DataTypes = SQ.DataTypes;

export const Todo = sequelize.define(
    'todo',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.TEXT,
            allowNull: true,

        },
        endDate: {
            type: DataTypes.TEXT,
            allowNull: true,
        }
    },
    { timestamps: false }
);