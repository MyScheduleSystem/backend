import { User } from '../model/user.js';
import { Follow } from '../model/follow.js';
import { User } from '../model/user.js';
import SQ from 'sequelize';

const Sequelize = SQ.Sequelize;

const INCLUDE_USER = {
  attributes: [
    'id',
    'startDate',
    'userId',
    [Sequelize.col('user.name'), 'name'],
    [Sequelize.col('user.username'), 'username'],
  ],
  include: {
    model: User,
    attributes: [],
  },
};

const ORDER_DESC = {
  order: [['startDate', 'DESC']],
};

export async function getAll() { Follow.findAll({ ...INCLUDE_USER, ...ORDER_DESC }); } // get all follower

export async function getById(id) { // get follower by id
  return Follow.findOne({
    where: { id },
    ...INCLUDE_USER,
  });
}

export async function getByUsername(username) { // get follower by username
  return Follow.findOne({
    where: { username },
  });
}

export async function create(followeredId) { // create follower
  return Follow.create({ followeredId })
    .then((data) => this.getById(data.dataValues.id));
}

export async function remove(id) { // delete follower
  return Follow.findByPk(id)
    .then((data) => {
      data.destroy();
    });
}