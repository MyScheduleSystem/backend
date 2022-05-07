import * as containerRepository from '../repository/containerRepository.js'

export async function getByDate(request, response) {
    const { date } = request.body
    const findDate = await containerRepository.getByDate(date)
    if(!findDate) {
        return response.status(401).json({ message: `cannot find ${date}!!`})
    }
    response.status(200).json({ findDate })
}