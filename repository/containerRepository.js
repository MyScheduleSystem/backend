import { Container } from '../model/container.js';

export async function getByUserId(userId) {
    return Container.findOne({ where: { userId: userId } });
}

export async function createContainer(user) {
    return Container.create(user).then((data) => data.dataValues.id);
}

export async function updateBoxSize(user) {
    return Container.update(
        {
            boxHeight: user.boxHeight,
            boxWidth: user.boxWidth,
        },
        { where: { userId: user.userId } }
    )
}

export async function dropContainer(userId) {
    return Container.destroy({ where: { userId: userId } })
}