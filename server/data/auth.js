import SQ from 'sequelize';
import { db, sequelize } from '../db/database.js';
const { DataTypes } = SQ;

const User = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allow: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    url: DataTypes.TEXT,
  },
  { timestamps: false }
);

export async function findByUsername(username) {
  return User.findOne({ where: { username } });
}

export async function findById(id) {
  return User.findByPk(id);
}

export async function createUser(user) {
  return User.create(user).then((data) => data.dataValues.id);
}
