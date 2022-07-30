import React, { useState } from 'react'

const Passwordhideshow = () => {

    const [att,setAtt] = useState(true);

    const myfun =()=>{
        setAtt(!att);
    }

  return (
    <>
        <input type = {att ? "password" : "text" }  />
        <button onClick={myfun}>show/hide</button>
    </>
  )
}

export default Passwordhideshow