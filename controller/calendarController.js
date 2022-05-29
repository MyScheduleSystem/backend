import * as calendarRepository from '../repository/calendarRepository.js'

export async function getByOneDay(request, response) {
    const { date } = request.body
    const findTodo = calendarRepository.getByOneDay(date)
    if(!findTodo) {
        return response.status(401).json({ message: `No todo ${date}`})
    }
    response.status(200).json({ findTodo })
}

export async function getAll(request, response) {
    const { date } = request.body
    const findAllTodo = calendarRepository.getAll(date)

    response.status(200).json({ findAllTodo })
}

export async function createCalendar(request, response) {
    const { userId, date, endDate,  contentTitle, content } = request.body;
    const newCalendar = await calendarRepository.createCalendar(
        {
            userId: userId,
            date: date,
            contentTitle: contentTitle,
            content: content,
            endDate: endDate,
        }
    )
    if(!newCalendar) {
        return response.status(401).json({ message: "Calendar creation fail" })
    }
    response.status(200).json({ message: `Carendar creation successful, carendar id = ${newCalendar}` })
}

export async function getAllByUserId(request, response) { //using user id => return 
    const userId = request.body.userId;
    const calendar = calendarRepository.getByUserId(userId);
    response.status(200).json(calendar);
}