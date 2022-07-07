import React, { useReducer ,useState } from 'react';
import Student from './students';
import './App.css';

const reducer = (state , action) => {
  switch (action.type) {
    case 'add-student':
    const name = action.payload.name 
    const newStudent = {
      id: Date.now(),
      name : name ,
      isHere: false,
    };
    return { //새로운 state 반환 
      count: state.count + 1,
      students: [...state.students, newStudent],
      //원래 있는 student에다가 새로운 student 
    };
  case 'delete-student':
    return {
      count: state.count -1 ,
      students: state.students.filter(student => student.id !== action.payload.id),

    };

  case 'mark-student':
    return {
      count: state.count,
      students: state.students.map(student => {
        if(student.id === action.payload.id){
          return {...student, isHere: !student.isHere}
        }
        return student;
      })
    }
    default : 
      return state;
    
    
   }
};

const initialState = {
  count : 0,
  students: [
    {
      id: Date.now(),
      name: 'James',
      isHere: false,
    }
  ]
}


function App() {
  const [name, setName] = useState('');
  const [studentsInfo , dispatch] = useReducer(reducer, initialState) // reducer와 초깃값
  // [state , dispatch] = userREducer(reducer, 초깃값)
  return (
    <div className="App">
      <h1>출석부</h1>
      <p>총 학생 수 : {studentsInfo.count}</p>
      <input
        type="text"
        placeholder='이름을 입력하세요'
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
      </input>
      <button
        onClick={()=>
          {
            dispatch({type : 'add-student', payload: {name}})
          }
        }
      >추가</button>
      {studentsInfo.students.map(student => {
        return <Student 
          key ={ student.id } 
          name = {student.name}
          dispatch = {dispatch}
          id = { student.id }
          isHere= {student.isHere}
          />
      })}
    </div>
  );
}

export default App;
