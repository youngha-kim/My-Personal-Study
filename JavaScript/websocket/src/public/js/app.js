const messageList = document.querySelector("ul")
const messageForm = document.querySelector("form")
// 여기의 socket은 서버로의 연결을 뜻한다.
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("connected to server ");
})

socket.addEventListener("message", (message) => {
  console.log("new messages :  `", message.data, "` from the sever")
})

socket.addEventListener("close", () => {
  console.log("disconnected to server ");
})

const handleSubmit = (event) => {
  event.preventDefault();
  const input = messageForm.querySelector("input");
  socket.send(input.value);
  input.value = "";
}

messageForm.addEventListener("submit", handleSubmit)



