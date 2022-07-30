import React, { useState } from 'react'

const Sortmesh = () => {


    const [asc,setAsc] = useState([]);
    const [ desc,setDesc] = useState([]);


    const a= [23,4,11,33,5,7,0,1];

    const ascend =(arr)=>{
        var sr = arr.sort((a,b)=>{
            return a - b;
        })
        setAsc(sr);
    }

  return (
    <div>
        <button onClick={ascend}>Sort Ascendign</button>
        {
            asc.map((e,ind)=>{
                return <h1 key={ind}>{e}</h1>
            })
        }
    </div>
  )
}

export default Sortmesh