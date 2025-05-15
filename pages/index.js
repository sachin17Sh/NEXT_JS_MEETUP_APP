import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS =[
    {
      id: 'm1',
      title: "First Meetup",
      image: "https://media.istockphoto.com/id/1365083170/photo/shopping-in-sector-17-chandigarh.jpg?s=612x612&w=0&k=20&c=g3IfsRRbnJBWsdGxN8IcRiKah3nuNw2M0oDPuPkN6Kg=",
      address: "Chandigarh",
      description: 'Some Description'
    },
    {
      id: 'm2',
      title: "Second Meetup",
      image: "https://media.istockphoto.com/id/1021121872/photo/chandigarh-colorful-sculptures-in-the-rock-garden.jpg?s=612x612&w=0&k=20&c=wXuZOVdh_YpPgrdjnqPVrO8TBfY_HigiX0WDQQk2leE=",
      address: "Mohali",
      description: 'Some Description'
    },
]

export default function HomePage() {
  return (
    <>
      <MeetupList meetups={DUMMY_MEETUPS}/>
    </>
  )
}
