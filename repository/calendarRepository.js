import SQ from 'sequelize';
import { Calendar } from "../model/calendar.js";

const Op = SQ.Sequelize
const column = ['date', 'endDate', 'contentTitle', 'content']
//all get function use userId

export async function createCalendar(user) {
    return Calendar.create(user).then((data) => data.dataValues.id);
}

export async function getByUserId(userId) { //All calendar with all date
    return Calendar.findAll({ 
        attributes: column,
        where: { userId: userId } 
    });
}

export async function getByDate(user) {
    return Calendar.findAll({
        attributes: column,
        where: { 
            userId: user.userId,
            date: { [Op.eq]: date } // == date
        }
    })
}

export async function getByBetweenDate(user) {
    return Calendar.findAll({
        attributes: column,
        order: [ ['date', 'ASC'] ],
        where: {
            userId: user.userId,
            date: { [Op.between]: [user.firstDay, user.lastDay] }
        }
    })
}

export async function getByOverDate(user) {     //user want date >= date
    return Calendar.findAll({
        attributes: column,
        order: [ ['date', 'ASC'] ],
        where: {
            userId: user.userId,
            date: { [Op.gte]: user.overDate }
        }
    })
}

export async function getByUnderDate(user) {    //user want date <= date
    return Calendar.findAll({
        attributes: column,
        order: [ ['date', 'ASC'] ],
        where: {
            userId: user.userId,
            date: { [Op.lte]: user.underDate }
        }
    })
}

export async function getByTitle(user) {    //title search
    return Calendar.findAll({
        attributes: column,
        order: [ ['date', 'ASC'] ],
        where: {
            userId: user.userId,
            contentTitle: { [Op.like]: '%' + user.title + '%' }
        }
    })
}

export async function getByTitleWithDate(user) {
    return Calendar.findAll({
        attributes: column,
        order: [ ['date', 'ASC'] ],
        where: {
            userId: user.userId,
            contentTitle: { [Op.like]: '%' + user.title + '%' },
            date: { [Op.between]: [user.firstDay, user.lastDay] }
        }
    })
}

export async function getByContent(user) {  //content keyword search
    return Calendar.findAll({
        attributes: column,
        order: [ ['date', 'ASC'] ],
        where: {
            userId: user.userId,
            content: { [Op.like]: '%' + user.content + '%' }
        }
    })
}

export async function getByContentWithDate(user) {
    return Calendar.findAll({
        attributes: column,
        order: [ ['date', 'ASC'] ],
        where: {
            userId: user.userId,
            content: { [Op.like]: '%' + user.content + '%' },
            date: { [Op.between]: [user.firstDay, user.lastDay] }
        }
    })
}