import React,{useState} from 'react'

const App1 =()=> {
    const[name,setNmae]=useState('nikhil');
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=>setNmae('sai nikhil')}>
            change
        </button>
    </div>
  )
}

export default App1