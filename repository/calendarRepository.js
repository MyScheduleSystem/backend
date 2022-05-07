import { Op, SQ } from 'sequelize';
import { Calendar } from "../model/calendar";
import { Todo } from '../model/todo';

const sequelize = SQ.Sequelize
const INCLUDE_TODO = {
    include: {
        model: Todo,
    },
    attributes: [
        [sequelize.col(todo.content)]
    ]

}

export async function getByOneDay(date) {
    const calendarDate = date.split("-")
    return Calendar.findOne({ 
        where: {
            year: calendarDate[0], 
            month: calendarDate[1], 
            day: calendarDate[2]} 
        },
        ...INCLUDE_TODO
        )
}

export async function getAll(date) {
    const calendarDate = date.split("-")
    return Calendar.findAll({ 
        where: {
            year: calendarDate[0],
            month: calendarDate[1],
            day: { [Op.between]: [1, 31] }
        },
        ...INCLUDE_TODO
    })
}