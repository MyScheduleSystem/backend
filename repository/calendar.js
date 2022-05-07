import {Op} from 'sequelize';
import { Calendar } from "../model/calendar";


export async function getByOneDay(date) {
    const calendarDate = date.split("-")
    return Calendar.findOne({ where: {year: calendarDate[0], month: calendarDate[1], day: calendarDate[2]} })
}

export async function getByAllDay(date) {
    const calendarDate = date.split("-")
    return Calendar.findAll({ 
        where: {
            year: calendarDate[0],
            month: calendarDate[1],
            day: { [Op.between]: [1, 31] }
        }
     })
}