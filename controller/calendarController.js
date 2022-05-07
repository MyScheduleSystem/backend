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