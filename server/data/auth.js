import { getUsers } from '../db/database.js';
import MongoDb from 'mongodb';
const ObjectId = MongoDb.ObjectId;

function mapOtinalUser(user) {
  return user ? { ...user, id: user._id } : user;
}

export async function findByUsername(username) {
  return getUsers()
    .findOne({ username }) //
    .then(mapOtinalUser);
}

export async function findById(id) {
  return getUsers()
    .findOne({ _id: new ObjectId(id) })
    .then(mapOtinalUser);
}

export async function createUser(user) {
  return getUsers()
    .insertOne(user)
    .then((data) => data.insertedId.toString());
}
