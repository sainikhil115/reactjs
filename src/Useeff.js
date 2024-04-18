import React,{useState} from 'react';


 const Useeff=()=> {
    const[count,setCount]=useState(0)

  return (
    <div>
        <center>
            <button onClick={()=>setCount[count+1]}>
                click me
            </button>   
            
            
        </center>
    </div>
  )
}

export default Useeff