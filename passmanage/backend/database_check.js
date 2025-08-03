import { MongoClient } from 'mongodb';

const URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';

async function checkDatabaseConnection() {

  try {
    const client = new MongoDB.MongoClient(URI);
    await client.connect();
    console.log("Database connection successful");
    const db = client.db('passop');
    const collections = await db.listCollections().toArray();
    console.log("Collections in the database:", collections);
    const result = await db.collection('test').insertOne({ test: "test", value: 123 });
    console.log("Insert result:", `${result.insertedId}`);
  } catch (error) {
    console.error("Database connection failed:", error);
  } finally {
    await client.close();
  }
}

checkDatabaseConnection();
