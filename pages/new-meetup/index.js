import { useRouter } from "next/router"
import NewMeetupForm from "../../components/meetups/NewMeetupForm"
import Head from "next/head"

export default function NewMeetupPage() {
  const router = useRouter()
  async function addMeetupHandler(enteredMeetupData) {
    const response = await fetch('api/new-meetup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(enteredMeetupData)
    })
    const data = await response.json()
    console.log(data)
    if (data) {
      router.push('/')
    }
    else {
      console.log("An error occurred")
    }
  }
  return (
    <>
      <Head>
        <title>Add a New Meetup</title>
        <meta name="description" content="Add a new meetup arcoss any location" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  )
}
