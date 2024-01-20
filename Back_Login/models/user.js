const { MongoClient, ObjectId } = require('mongodb');
require('dotenv').config();

const uri = process.env.DB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Define la colección y el modelo de usuario
async function getUserCollection() {
  if (!client.isConnected()) {
    await client.connect();
  }
  const db = client.db(process.env.DB_NAME);
  return db.collection('users');
}

async function createUser(user) {
  const userCollection = await getUserCollection();
  const result = await userCollection.insertOne(user);
  return result.insertedId;
}

async function getUserById(userId) {
  const userCollection = await getUserCollection();
  return userCollection.findOne({ _id: new ObjectId(userId) });
}

// Puedes agregar más operaciones según tus necesidades

module.exports = {
  createUser,
  getUserById,
}