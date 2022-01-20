import { MongoClient } from 'mongodb'

const uri = process.env.MONGO_URI
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })

export async function insertOne (databaseName, collectionName, document) {
  let result

  try {
    await client.connect()
    const collection = client.db(databaseName).collection(collectionName)

    result = await collection.insertOne(document)
  } catch (error) {
    result = Promise.reject(error)
  } finally {
    await client.close()
  }

  return result
}
