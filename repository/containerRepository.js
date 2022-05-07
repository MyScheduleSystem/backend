import { Container } from '../model/container.js';

export async function getByDate(date) {
    const scheduleDate = date.split("-")
    return Container.findOne({ where: { year: scheduleDate[0], month: scheduleDate[1] } })
}

export async function createContainer(date) {
    const scheduleDate = date.split("-")
    return Container.create({
        year: scheduleDate[0],
        month: scheduleDate[1],
    })
}