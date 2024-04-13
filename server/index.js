const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb');
require("dotenv").config();
 
const cors = require('cors');

const PORT = process.env.PORT || 8080;
const FRONT_END_URI = process.env.FRONT_END_URI;
const corsOptions = {
  origin: FRONT_END_URI, // frontend URI (ReactJS)
};
app.use(express.json());
app.use(cors(corsOptions));
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", FRONT_END_URI);
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//app.listen(port);
const mongodb_uri = `${process.env.MONGODB_URI}/`;
const client = new MongoClient(mongodb_uri);

app.get('/skills', (req, res) => {
  async function run() {
    try {
      await client.connect();
      console.log("server")
      const db = client.db(`${process.env.DB_NAME}`);
      console.log("db")
      const collection = db.collection(`${process.env.DB_COLLECTION_NAME}`);
      console.log("skills")
      const skills = await collection.find({}, {name: 1, percentage: 1}).toArray();
      console.log(skills);
      res.send(skills);
    }
    finally {
      await client.close();
    }
  }
  run().catch(console.error)
}
)


app.get("/", (req, res) => {
  res.status(201).json({message: "Connected to Backend!"});
});

app.listen(PORT, () => {
  console.log(`App is Listening on PORT ${PORT}`);
});