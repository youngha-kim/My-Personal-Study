import './App.css';
import {useState} from 'react';
function App() {

  const heavyWork = () => {
    console.timeLog("엄청 무거운 작업!!!")
    return ['홍길동', "김민수"]
  }

  const [names, setnames] = useState(()=> {
    return heavyWork(); //  초기값을 가져올 떄 콜백형태로 넣어주면, 
    // 맨처음 화면이 랜더링 될 때만 불려지게 된다.
  })
  const [input, setinput] = useState("");
  
  const handlInputChange = (e) => {
    setinput(e.target.value);
  } 

  const handleUpLoad = () => {
    setnames((prevState) => {
      console.log("이전 states", prevState)
      return([input , ...prevState]);
    })
  }

  return (
    <div>
  
      <input type = 'text' value = {input} onChange = {handlInputChange}/>
      <button onClick={handleUpLoad}>Upload</button>
      {names.map((el , idx) => <p key = {idx}>{el}</p>)};
    </div>
  );
}

export default App;
