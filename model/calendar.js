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
        }
    },
    { timestamps: false }
);
Calendar.belongsTo(Todo)