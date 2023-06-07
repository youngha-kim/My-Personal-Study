import MeetupDetail from "../../components/meetups/MeetUpDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
function MeetupDetails(props) {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props?.meetupData.description}
        />
      </Head>
      <MeetupDetail
        image={props?.meetupData.image}
        title={props?.meetupData.title}
        address={props?.meetupData.address}
        description={props?.meetupData.description}
      />
    </>
  );
}
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://youngha-kim:dkstmq25!%40@cluster0.x5disjh.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsColllection = db.collection("meetups");
  const meetups = await meetupsColllection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    fallback: true,
    paths: meetups.map((meetup) => ({
      params: { meetUpId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetUpId;
  const client = await MongoClient.connect(
    "mongodb+srv://youngha-kim:dkstmq25!@cluster0.rf2yeay.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsColllection = db.collection("meetups");
  // const meetupstring = new ObjectId(meetupId)

  const selectedMeetups = await meetupsColllection.findOne({
    _id: new ObjectId(meetupId),
  });

  const parseSeletedMeetups = JSON.parse(JSON.stringify(selectedMeetups));

  client.close();

  return {
    props: {
      meetupData: parseSeletedMeetups,
    },
  };
}
export default MeetupDetails;
