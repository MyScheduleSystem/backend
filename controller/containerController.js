import * as containerRepository from '../repository/containerRepository.js'

export async function createContainer(request, response) {
    const userId = request.body.userId
    const isContainer = await containerRepository.getByUserId(userId)
    if(isContainer) {
        return response.status(409).json({ message: `You already have a container, container id = ${isContainer.id}` })
    }
    const newContainer = await containerRepository.createContainer({
        userId: userId
    })
    if(!newContainer) {
        return response.status(401).json({ message: "Container creation fail" })
    }
    response.status(200).json({ message: `Container creation successful, container id = ${newContainer}` })
}

export async function getByUserId(request, response) {
    const userId = request.body.userId
    const isContainer = await containerRepository.getByUserId(userId)
    if(isContainer) {
        return response.status(200).json(isContainer)
    }
    response.status(401).json({ message: "You have not container" })
}

export async function updateBoxSize(request, response) {
    const { userId, boxHeight, boxWidth } = request.body
    
    try {
        await containerRepository.updateBoxSize(
        {
            userId,
            boxHeight,
            boxWidth,
        })
        const result = await containerRepository.getByUserId(userId)
        response.status(201).json({ result })    
    }
    catch {
        return response.status(401).json({ message: "Can not find container" })    
    }
}

export async function dropContainer(request, response) {
    try {
        await containerRepository.dropContainer(request.body.userId)
        response.status(201).json({ message: "Drop your container" })
    }
    catch {
        return response.status(401).json({ message: "Drop container fail" })    
    }
}