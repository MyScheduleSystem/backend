import SQ from 'sequelize';
import { sequelize } from '../database/database.js';
import { Todo } from './todo.js';
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
        year: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        month: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        day: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    },
    { timestamps: false }
);
Calendar.belongsTo(Todo)