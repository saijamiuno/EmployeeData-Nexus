const express = require("express");
const { ObjectId, ServerApiVersion } = require("mongodb");

const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://saijami:3Yc7sJygq8r95ZEU@atlascluster.iotmmxp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
mongoose = require("mongoose");

const app = express();
app.use(express.json());

const getUsersData = async () => {
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  const db = client.db("sample_training");
  try {
    const collection = db.collection("companies");
    const result = await collection.find({}).toArray(); // Add find() and toArray()
    return result.slice(0, 100);
  } catch (error) {
    console.log(`Error : ${error}`);
  } finally {
    client.close();
  }
};

app.get("/", (req, res) => {
  res.send("API RUNS");
});

app.get("/grades", async (req, res) => {
  const users = await getUsersData();
  res.status(200).json(users);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
