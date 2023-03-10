import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export async function getStaticProps(context) {
  // fetch data from an API
  const client = await MongoClient.connect('mongodb+srv://youngha-kim:dkstmq25!@cluster0.rf2yeay.mongodb.net/meetups?retryWrites=true&w=majority');
  const db = client.db();
  const meetupsColllection = db.collection('meetups')
  const meetups= await meetupsColllection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title : meetup.title,
        address : meetup.address,
        image: meetup.image,
        id : meetup._id.toString()
      }))
    },
    revalidate : 1
  };
}

export default HomePage;
