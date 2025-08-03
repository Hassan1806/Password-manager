import express from 'express'
import dotenv from 'dotenv'
import { MongoClient } from 'mongodb'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'


mongoose.connect('mongodb://127.0.0.1:27017/passop')


dotenv.config()
const dbname = 'passop';
const URI = process.env.MONGODB_URI

if (!URI) {
  console.error('Error: MONGODB_URI is not defined in the environment variables.');
  process.exit(1); // Exit if the MongoDB URI is not defined
}

console.log('MongoDB URI:', URI);

const port = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(cors({

  origin: 'http://localhost:5173', 
  credentials: true,

}))

const client = new MongoClient(url);

await client.connect()
console.log('Connected to MongoDB');




// This code gets all the passwords
app.get('/', async (req, res) => {
  const db = client.db(dbname);
  const collection = db.collection('passwords');
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
  console.log('Connected in get function');
}

)



// This code adds a password to the database
app.post('/', async (req, res) => {

  const password = req.body; 
  const db = client.db(dbname);
  const collection = db.collection('passwords');
  const insertWord = await collection.insertOne(password);
  res.send({success: true, result: insertWord } );
  res.status(201).json({ message: 'Password added successfully' });
  console.log('Connected in post function');



})


// This code deletes a password from the database
app.delete('/', async (req, res) => {

  const password = req.body; 
  const db = client.db(dbname);
  const collection = db.collection('passwords');
  const insertWord = await collection.deleteOne(password);
  res.send({success: true, result: insertWord } );
  res.status(201).json({ message: 'Password added successfully' });
  console.log('Connected in post function');



})


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
}) // Closing brace for serverStarts function


app.get('/api/test', (req, res) => {
  res.send({ status: 'Backend is working!' });
});

