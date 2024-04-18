import React,{useState} from 'react';


 const Test=()=> {
    const[user,setUser]=useState()
    const handler()=e=>{

    }
  return (
    <div>
        <center>

            <input type='text' placeholder='username' value={user} name='user'
            onChange={handler()}/>


           <input type='text'placeholder='password'/>
                <button>

                </button>
            
            
        </center>
    </div>
  )
}

export default Test
