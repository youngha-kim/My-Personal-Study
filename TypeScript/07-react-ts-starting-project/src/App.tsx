import Todos from "./component/Todos";
import Todo from "./models/todo";
function App() {
  const todos = [
    new Todo('Learn React'),
    new Todo('Learn ts')
  ];
  return (
    <div>
      <Todos items = {todos}/>
    </div>
  );
}

export default App;
