import React, { useState } from 'react'

const VaibhavsTask = () => {

const [count,setCount]=useState(0);

const add=()=>{
   
    setCount(count+1);
    
}


  return (
    <>
        <button onClick={add}>Add</button>
        <button>Clear</button>

       <p>{count}</p>
    </>
  )
}

export default VaibhavsTask