// our-domain.com/new-meetu

import NewMeetupForm from "../../components/meetups/NewMeetupForm";

function NewMeetupPage() {

  function addMeetupHandler(enteredMeetupData){
    console.log(enteredMeetupData)
  }
  return <NewMeetupForm onAddMeetup = {addMeetupHandler}/>;
}

export default NewMeetupPage;
