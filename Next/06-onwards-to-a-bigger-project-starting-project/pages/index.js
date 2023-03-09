import MeetupList from "../components/meetups/MeetupList";

const MEET_UP_LIST = [
  {
    id: "m1",
    title: "A FIRST mEET UP",
    image:
      "https://images.unsplash.com/photo-1677980102989-96e7c29731f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    address: "some address 5, korea",
    description: "blaur blaur",
  },
  {
    id: "m2",
    title: "A second mEET UP",
    image:
      "https://images.unsplash.com/photo-1670349148055-e11a0b3be242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    address: "some address 6, korea",
    description: "blaur blaur blur ",
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}
// export function getStaticProps() {
//   return {
//     props: {
//       meetups: MEET_UP_LIST,
//     },
//     revalidate: 10
//   };
// }

export async function getServerSideProps(context) {
  // fetch data from an API
  const req = context.req;
  const res = context.res;
  // console.log(res)

  return {
    props: {
      meetups: MEET_UP_LIST,
    },
  };
}

export default HomePage;
