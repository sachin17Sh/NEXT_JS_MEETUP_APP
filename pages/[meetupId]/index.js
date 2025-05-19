import { MongoClient, ObjectId } from "mongodb"
import Head from "next/head";

import MeetupDetail from "../../components/meetups/MeetupDetail";


export default function MeetupDetailPage(props) {
  return (
    <>
     <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description} />
    </>
  )
}

export async function getStaticPaths() {   //this is required for dynamic pages nd using getstaticprops
  const client = await MongoClient.connect('mongodb://127.0.0.1:27017/meetups')
  const db = client.db();
  const meetupCollection = db.collection('meetup')
  const meetups = await meetupCollection.find({}, { _id: 1 }).toArray()
  client.close()

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))


  }
}


export async function getStaticProps(context) {
  const meetupId = context.params.meetupId
  const client = await MongoClient.connect('mongodb://127.0.0.1:27017/meetups')
  const db = client.db();
  const meetupCollection = db.collection('meetup')
  const selectedMeetup = await meetupCollection.findOne({_id : new ObjectId(meetupId)})
  client.close()
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description
      }
    }
  }

}