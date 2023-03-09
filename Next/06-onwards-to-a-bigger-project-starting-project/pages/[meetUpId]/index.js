import MeetupDetail from "../../components/meetups/MeetUpDetail";

function MeetupDetails() {
  return (
    <>
      <MeetupDetail
        image="https://images.unsplash.com/photo-1677980102989-96e7c29731f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        title="first meetup"
        address = "some street 5, some city"
        description = "this is a first meetup"
      />
      <img
        src="https://images.unsplash.com/photo-1677980102989-96e7c29731f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="A First meetup"
      />
      <h1>A First meetup</h1>
      <address>Some Street 5, Some city </address>
      <p>The Meet up descripction</p>
    </>
  );
}
export function getStaticPaths(){
  return {
    fallback : true ,
    paths : [
      {
        params: {meetUpId : "m1"}
      },
      {
        params : {meetUpId : "m2"}
      }
    ]
  }
}

export function getStaticProps(context){
  // fetch data for a single meetup 
  const meetupId = context.params.meetUpId;
  // console.log(meetupId)
  return {
    props : {
      meetupData : {
        image :"https://imagesunsplash.com/photo-1677980102989-96e7c29731f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
        id : meetupId,
        title :"first meetup",
        address : "some street 5, some city",
        description : "this is a first meetup",
      }
    }
  }
}
export default MeetupDetails;



