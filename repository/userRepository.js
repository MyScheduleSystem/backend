import { User } from '../model/user.js';

// noSql
export async function findByUsername(username) { 
    return User.findOne({ where: { username } }); 
}
export async function findById(id) { 
    return User.findByPk(id); 
}
export async function createUser(user) { 
    return User.create(user).then((data) => data.dataValues.id); 
}
export async function updateUser(user) {
    return User.update(
        { 
            username: user.username,
            name: user.name,
            email: user.email,
        }, 
        { where: { id: user.id } });
}
export async function dropUser(id) {
    return User.destroy({ where: { id: id } });
}