import fetch from "node-fetch";

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function process(){
  console.log("hello");
  await sleep(1000);
  console.log("how r u");
}

process().then(()=>{
  console.log(".")
})

async function fetchTodo(){
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  const response = await fetch(url)
  console.log(response)
  // const todo = await response.json();
  // console.log(todo)
}

fetchTodo()