/// /api/new-meetup
import { MongoClient } from 'mongodb'

export async function MeetupHandler(req, res) {
    if (req.method === 'POST') {
        const data = req.body
        const { titlt, image, address, description } = data;

        const client = await MongoClient.connect('mongodb://127.0.0.1:27017/meetups')

        const db = client.db();

        const meetupCollection = db.collection('meetup')

        const result = await meetupCollection.insertOne(data)

        console.log(result);

        client.close();

        res.status(201).json({message: "Meetup inserted"})
    }
}

export default MeetupHandlerj