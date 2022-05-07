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
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        month: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        day: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        endDate: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    { timestamps: false }
);