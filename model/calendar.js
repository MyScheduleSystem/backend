import SQ from 'sequelize';
import { sequelize } from '../database/database.js';
const DataTypes = SQ.DataTypes;

export const Calendar = sequelize.define(
    'calendar',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            comment: 'Default Date, YYYY-MM-DD'
        },
        endDate: {
            type: DataTypes.DATEONLY,
            allowNull: true,
            comment: 'use or not'
        },
        contentTitle: {
            type: DataTypes.TEXT,
            allowNull: false,
            comment: 'todo'
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            comment: 'todo'
        }
    },
    { timestamps: false }
);