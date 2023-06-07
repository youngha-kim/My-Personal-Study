// /api/new-meetup
import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://youngha-kim:dkstmq25!@cluster0.rf2yeay.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsColllection = db.collection("meetups");
    const result = await meetupsColllection.insertOne(data);
    console.log(result);
    client.close();

    res.status(201).json({ message: "meetup inserted!" });
  }
}

export default handler;
