import React, { useEffect, useState } from 'react'

const CallApi12 = () => {

    const [item,setItem] =useState([]);
    useEffect(()=>{
        const fetchapi = async()=>{
            const url = 'https://jsonplaceholder.typicode.com/todos';
            const res = await fetch(url);
            const data = await res.json();
            setItem(data);
        }
        fetchapi()
    },[])
console.log(item);

  return (
   <>
        {
            item.map((e,ind)=>{
                return(
                    <h1 key={ind}>{e.title}<input type="checkbox" defaultChecked={e.completed}/></h1>
                )
            })
        }
       
      </>
  )
}

export default CallApi12