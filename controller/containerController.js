import * as containerRepository from '../repository/containerRepository.js'

export async function getByDate(request, response) {
    const { date } = request.body
    const findDate = await containerRepository.getByDate(date)
    if(!findDate) {
        return response.status(401).json({ message: `cannot find ${date}!!`})
    }
    response.status(200).json({ findDate })
}

export async function createContainer(request, response) {
    const { date } = request.body
    const createdDate = containerRepository.createContainer(date)
    if(!createdDate) return response.status(401).json({ message: "Create Fail!!!!" })
    response.status(200).json({ createdDate })
}