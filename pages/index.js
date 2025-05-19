import { MongoClient } from "mongodb";
import Head from "next/head"

import MeetupList from "../components/meetups/MeetupList";

export default function HomePage(props) {
  return (
    <>
    <Head>
      <title>Meetups</title>
      <meta name="description" content="Browse a huge list of highly recomandated meetups"/>
    </Head>
      <MeetupList meetups = {props.meetups}/>
    </>
  )
}

//this always excute on the sever SIDE or during build process and there is another function getServerSideProps()
export async function getStaticProps(){    
  //fetch data from an API
    const client = await MongoClient.connect('mongodb://127.0.0.1:27017/meetups')
          const db = client.db();
          const meetupCollection = db.collection('meetup')
          const meetups = await meetupCollection.find().toArray()
          client.close()

  return{
    props: {
      meetups: (await meetups).map((meetup)=>({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      }))
    },
    revalidate: 1 //pass the time that is taken to get the server updated
  }
}
