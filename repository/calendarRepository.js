import SQ from 'sequelize';
import { Calendar } from "../model/calendar.js";
import { Todo } from '../model/todo.js';

const sequelize = SQ.Sequelize
const INCLUDE_TODO = {
    include: {
        model: Todo,
    },
    attributes: [
        [sequelize.col('todo.content'), "content"]
    ]
}

export async function getByOneDay(date) {
    const calendarDate = date.split("-")
    return Calendar.findOne({ 
        ...INCLUDE_TODO,
        where: {
            year: calendarDate[0], 
            month: calendarDate[1], 
            day: calendarDate[2]
        }},
    )
}

export async function getAll(date) {
    const calendarDate = date.split("-")
    return Calendar.findAll({ 
        ...INCLUDE_TODO,
        where: {
            year: calendarDate[0],
            month: calendarDate[1],
            day: { [SQ.between]: [1, 31] }
        },    
    })
}