import React, { useEffect, useState } from 'react'

const Callapi6 = () => {

    const [item,setItem] = useState([]);

    useEffect(()=>{
        const fetchapi = async()=>{
            const url="https://jsonplaceholder.typicode.com/todos";
            const response= await fetch(url);
            const data = await response.json();
            setItem(data);
        }
        fetchapi()
    },[])

    console.log(item);
  return (
    <>
        {
            item.map((e,ind)=>{
                return <h1 key={ind}>{e.title} <input type="checkbox" defaultChecked={e.completed} /> </h1>
            })
        }
    </>
  )
}

export default Callapi6