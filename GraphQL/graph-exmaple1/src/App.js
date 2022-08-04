import getrepo from './Graph';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react' 
import Discussions from './Discussions';


function App() {

  const [agoradata , setagoradata] = useState({})

  const {discussions} = agoradata
  // console.log(discussions)

  useEffect(()=>{
    getrepo()
    .then((data) => { setagoradata(data)})
    .catch((error) => { console.log('err:', error)})
  },[])

  // {agoradata.discussions.edges[0].node.createdAt} Learn GraphQL API 

  return (
    <>
    <div className="main">
      <header>
        header 
      </header>
      <div className='main-wrapper'>
        {discussions !== undefined ? <div><Discussions discussions={discussions.edges}/></div> : <div>Loading...</div> }
      </div>
      <footer> 
        codestates
      </footer>
    </div>
    </>
  );
}

export default App;
