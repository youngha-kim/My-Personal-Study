
import "./App.css";
import { useQuery } from "react-query";
import axios from "axios";

function App() {
  const { isLoading, error, data } = useQuery("users", () =>
    axios
      .get("http://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
  );
  // graphql이나 반응 아폴로를 사용한 적이 있다면 이러한 문법에 친숙할 수 있음.
  if(isLoading) return 'Loading'
  if(error) return "An error has occurred: " + error.message

  console.log(data);

  return (
    <div className="App">
      <h1>React Query</h1>
      {data.map((user) => {
        return (
          <h3 key = {user.id}>{user.name}</h3>
        );
        
      })}
    </div>
  );
}

export default App;
